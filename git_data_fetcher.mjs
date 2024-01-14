import fetch from "node-fetch";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const openSource = {
  githubConvertedToken: process.env.GITHUB_TOKEN,
  githubUserName: process.env.GITHUB_USERNAME,
};

const QUERY_PR = `
  query {
    user(login: "${openSource.githubUserName}") {
      pullRequests(last: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
        totalCount
        nodes {
          id
          title
          url
          state
          mergedBy {
            avatarUrl
            url
            login
          }
          createdAt
          number
          changedFiles
          additions
          deletions
          baseRepository {
            name
            url
            owner {
              avatarUrl
              login
              url
            }
          }
        }
      }
    }
  }
`;

const IGNORED_REPO = "TestIssuesRepo"; // Name of the repo to ignore
const MAX_ISSUES_COUNT = 100; // Maximum number of issues to fetch

const QUERY_ISSUE = (afterCursor) => `
  query {
    user(login: "${openSource.githubUserName}") {
      issues(last: 100, after: ${afterCursor}, orderBy: {field: CREATED_AT, direction: DESC}) {
        totalCount
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          id
          closed
          title
          createdAt
          url
          number
          assignees(first:100){
            nodes{
              avatarUrl
              name
              url
            }
          }
          repository {
            name
            url
            owner {
              login
              avatarUrl
              url
            }
          }
        }
      }
    }
  }
`;

const QUERY_ORG = `
  query {
    user(login: "${openSource.githubUserName}") {
      repositoriesContributedTo(last: 100) {
        totalCount
        nodes {
          owner {
            login
            avatarUrl
            __typename
          }
        }
      }
    }
  }
`;

const QUERY_PINNED_PROJECTS = `
  query { 
    user(login: "${openSource.githubUserName}") { 
      pinnedItems(first: 6, types: REPOSITORY) {
        totalCount
        nodes {
          ... on Repository {
            id
            name
            createdAt
            url
            description
            isFork
            languages(first: 10) {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

const baseUrl = "https://api.github.com/graphql";
const headers = {
  "Content-Type": "application/json",
  Authorization: "bearer " + openSource.githubConvertedToken,
};

async function fetchData(query) {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ query }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

async function processPRs(data) {
  const prs = data.data.user.pullRequests.nodes;
  let open = 0,
    closed = 0,
    merged = 0;

  prs.forEach((pr) => {
    if (pr.state === "OPEN") open++;
    else if (pr.state === "MERGED") merged++;
    else closed++;
  });

  return {
    data: prs,
    open,
    closed,
    merged,
    totalCount: prs.length,
  };
}

async function processIssues() {
  let issues = [];
  let hasNextPage = true;
  let afterCursor = null;

  while (issues.length < MAX_ISSUES_COUNT && hasNextPage) {
    const query = QUERY_ISSUE(afterCursor);
    const data = await fetchData(query);
    const fetchedIssues = data.data.user.issues.nodes;
    const pageInfo = data.data.user.issues.pageInfo;

    // Filter and add issues
    const filteredIssues = fetchedIssues.filter(
      (issue) => issue.repository.name !== IGNORED_REPO
    );
    issues = [...issues, ...filteredIssues].slice(0, MAX_ISSUES_COUNT);

    // Update pagination info
    hasNextPage = pageInfo.hasNextPage;
    afterCursor = pageInfo.endCursor;
  }

  // Process the issues count
  let open = issues.filter((issue) => !issue.closed).length;
  let closed = issues.length - open;

  return {
    data: issues,
    open,
    closed,
    totalCount: issues.length,
  };
}

async function processOrgs(data) {
  const orgs = data.data.user.repositoriesContributedTo.nodes;
  const uniqueOrgs = orgs.reduce((acc, org) => {
    if (
      org.owner.__typename === "Organization" &&
      !acc.some((o) => o.login === org.owner.login)
    ) {
      acc.push(org.owner);
    }
    return acc;
  }, []);

  return { data: uniqueOrgs };
}

async function processPinnedProjects(data) {
  const projects = data.data.user.pinnedItems.nodes;
  const languages_icons = {
    Python: "logos-python",
    "Jupyter Notebook": "logos-jupyter",
    HTML: "logos-html-5",
    CSS: "logos-css-3",
    JavaScript: "logos-javascript",
    "C#": "logos-c-sharp",
    Java: "logos-java",
    Shell: "simple-icons:shell",
    Ruby: "logos:ruby",
    PHP: "logos-php",
    Dockerfile: "simple-icons:docker",
    Rust: "logos-rust",
  };

  const processedProjects = projects.map((project) => {
    const languages = project.languages.nodes.map((lang) => ({
      name: lang.name,
      iconifyClass: languages_icons[lang.name] || "",
    }));

    return { ...project, languages };
  });

  return { data: processedProjects };
}

async function writeToFile(fileName, content) {
  fs.writeFile(fileName, JSON.stringify(content), (err) => {
    if (err) {
      console.error("Error writing to file:", fileName, err);
      throw err;
    }
    console.log(`Data written to ${fileName}`);
  });
}

async function updateComponent(component) {
  let query;
  switch (component) {
    case "PR":
      query = QUERY_PR;
      break;
    case "Issue":
      query = QUERY_ISSUE(null);
      break;
    case "Org":
      query = QUERY_ORG;
      break;
    case "PinnedProjects":
      query = QUERY_PINNED_PROJECTS;
      break;
    default:
      throw new Error("Invalid component type");
  }

  const data = await fetchData(query);
  switch (component) {
    case "PR":
      const prData = await processPRs(data);
      await writeToFile("./src/shared/opensource/pull_requests.json", prData);
      break;
    case "Issue":
      const issuesData = await processIssues();
      await writeToFile("./src/shared/opensource/issues.json", issuesData);
      break;
    case "Org":
      const orgData = await processOrgs(data);
      await writeToFile("./src/shared/opensource/organizations.json", data);
      break;
    case "PinnedProjects":
      const pinnedProjectsData = await processPinnedProjects(data);
      await writeToFile("./src/shared/opensource/projects.json", data);
      break;
  }
}

// Usage example
updateComponent("PR").catch((err) => console.error(err));
updateComponent("Issue").catch((err) => console.error(err));
updateComponent("Org").catch((err) => console.error(err));
updateComponent("PinnedProjects").catch((err) => console.error(err));
