/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Pranav's Portfolio",
  description:
    "Where I love to showcase my work and passion for Computer Science.",
  og: {
    title: "Pranav's Portfolio",
    type: "website",
    url: "http://vjspranav.dev/",
  },
};

//Home Page
const greeting = {
  title: "VJS Pranavasri",
  logo_name: "vjspranav",
  nickname: "vjspranav",
  // and loves to teach
  subTitle:
    "I'm deeply passionate about Free and Open Source Software (FOSS) and dedicated to crafting FOSS solutions, including StagOS, my Android-based OS. I'm eager to share my knowledge and empower others in the FOSS and open-source community.",
  resumeLink: "https://vjspranav.dev/Resume.pdf",
  portfolio_repository: "https://github.com/vjspranav/masterPortfolio",
  githubProfile: "https://github.com/vjspranav",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/vjspranav",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vjspranav/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Outlook",
    link: "mailto:pranavasri@live.in",
    fontAwesomeIcon: "fa-microsoft", // Reference https://fontawesome.com/icons/microsoft?style=brands
    backgroundColor: "#0078D4", // Reference https://simpleicons.org/?q=outlook
  },
  {
    name: "Twitter",
    link: "https://twitter.com/vjspranav",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/Pranavasrivjs/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/vjspranav/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "StagOS",
      fileName: "StagImg",
      skills: [
        "⚡ Founder and lead developer of StagOS",
        "⚡ A custom Android-based OS made from scratch",
        "⚡ With over 100,000+ downloads",
      ],
      softwareSkills: [
        {
          skillName: "Android",
          fontAwesomeClassname: "material-symbols:android",
          style: {
            color: "#3DDC84",
          },
        },
        // Java
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            color: "#007396",
          },
        },
        // Jenkins
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "devicon:jenkins",
          style: {
            color: "#D24939",
          },
        },
        // Bash
        {
          skillName: "Bash",
          fontAwesomeClassname: "devicon:bash",
          style: {
            color: "#4EAA25",
          },
        },
        // Python
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            color: "#3776AB",
          },
        },
        // Linux
        {
          skillName: "Linux",
          fontAwesomeClassname: "devicon:linux",
          style: {
            color: "#FCC624",
          },
        },
        // git
        {
          skillName: "git",
          fontAwesomeClassname: "logos-git-icon",
          style: {
            color: "#F05032",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React",
        "⚡ Creating application backend in Node, Express & Flask",
        "⚡ Experience with SQL and NoSQL databases",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "fa6-brands:node",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
        "⚡ Experience with serverless architecture",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        // lambda
        {
          skillName: "Lambda",
          fontAwesomeClassname: "logos:aws-lambda",
          style: {
            color: "#FF9900",
            backgroundColor: "#000000",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Research and Development",
      fileName: "ResearchImg",
      skills: [
        "⚡ Researching Interoperability in IOT following oneM2M standards",
        "⚡ Worked on compilers and OS",
        "⚡ Functional Programming",
      ],
      softwareSkills: [
        {
          skillName: "C",
          fontAwesomeClassname: "logos:c",
          style: {
            color: "#A8B9CC",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "logos:c-plusplus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "Haskell",
          fontAwesomeClassname: "simple-icons:haskell",
          style: {
            color: "#5D4F85",
          },
        },
        {
          skillName: "Racket",
          fontAwesomeClassname: "simple-icons:racket",
          style: {
            color: "#A6F",
          },
        },
        {
          skillName: "Elm",
          fontAwesomeClassname: "simple-icons:elm",
          style: {
            color: "#60B5CC",
          },
        },
        {
          skillName: "LaTeX",
          fontAwesomeClassname: "simple-icons:latex",
          style: {
            color: "#008080",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "International Institute of Information Technology Hyderabad",
      subtitle: "B.Tech. and MS through Research in Computer Science",
      logo_path: "iiith_logo.png",
      alt_name: "IIIT Hyderabad",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ Done courses on OS, Compilers, Distributed Systems, Software Engineering etc.",
        "⚡ Researched in interoperability standards and systems for IoT in smart cities.",
        "⚡ Selected for Deans Merit List for two consecutive years.",
      ],
      website_link: "http://iiit.ac.in",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description: "All my work, internships, teaching and research roles.",
  header_image_path: "experience.svg",
  sections: [
    // {
    //   title: "Work",
    //   experiences: [
    //     {
    //       title: "Software Development Engineer",
    //       company: "Apple",
    //       company_url: "https://www.apple.com/",
    //       logo_path: "apple_logo.png",
    //       duration: "Starting June 2024",
    //       location: "Hyderabad, India",
    //       description:
    //         "I will be starting my role as a Software Development Engineer at Apple in June 2024. I will be joining the IS&T group and I am really excited to start my professional journey. More details to come as I embark on this new journey.",
    //     },
    //   ],
    // },
    {
      title: "Internships",
      experiences: [
        {
          title: "Backend Developer Intern",
          company: "Thinkskill",
          company_url: "https://thinkskill.co.in/",
          logo_path: "thinkskill_logo-removebg.png",
          duration: "Feb 2023 - May 2023",
          location: "Work From Home",
          description:
            "Developing a backend system for a restaurant management system that allows restaurants to manage their employees, their shifts, their payrolls, and their tips. I developed the complete backend system using NodeJS, Express, and MongoDB. I also developed a REST API for the system.",
        },
        {
          title: "Software Engineering Intern",
          company: "Virtual Labs",
          company_url: "https://vlabs.ac.in/",
          logo_path: "vlabs_logo-removebg.png",
          duration: "May 2021 - July 2021",
          location: "Work From Home",
          description:
            "This is a initiaitive by the Ministry of Education, Government of India and multiple institutions. I worked on modernizing webpages from deprecated technologies (Flash, Java). I implemented extensible JSON validation precompilation for webpages. I also developed a vanilla JavaScript web component for GitHub-integrated bug reporting hosted on AWS.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Teaching and Research Roles",
      experiences: [
        {
          title: "Teaching Assistant, OSN",
          company: "IIIT Hyderabad",
          company_url: "https://iiit.ac.in/",
          logo_path: "iiith_logo.png",
          duration: "Monsoon 2023",
          location: "Hyderabad, Telangana",
          description:
            "Teaching assistant for Operating Systems, a course on operating systems and their design. I was responsible for conducting and scheduling tutorials, grading assignments, and grading exams. This was a major course for the students and I guided them through the course and helped them with any doubts they had.",
          color: "#4285F4",
        },
        {
          title: "Research Assistant",
          company: "Smart City Research Center",
          company_url: "https://iiit.ac.in/",
          logo_path: "iiith_logo.png",
          duration: "Monsoon 2023",
          location: "Hyderabad, Telangana",
          description:
            "Researching on interoperability in IoT adhering to oneM2M standards. Developing a scalable and distributed architecture for interoperability for IoT in smart cities. Developing a microservices based architecture for the same.",
          color: "#4285F4",
        },
        {
          title: "Teaching Assistant, SE",
          company: "IIIT Hyderabad",
          company_url: "https://iiit.ac.in/",
          logo_path: "iiith_logo.png",
          duration: "Spring 2023",
          location: "Hyderabad, Telangana",
          description:
            "Teaching assistant for Software Engineering, a course on software development and engineering. I attended lectures, conducted and scheduled tutorials, graded assignments, and conducted exams. Planned the course porject along with the professor and guided students with any doubts they had.",
        },
        {
          title: "Teaching Assistant, DS",
          company: "IIIT Hyderabad",
          company_url: "https://iiit.ac.in/",
          logo_path: "iiith_logo.png",
          duration: "Monsoon 2022",
          location: "Hyderabad, Telangana",
          description:
            "Teaching assistant for Discrete Structures, a course on discrete mathematics and its applications. I was responsible for conducting and scheduling tutorials, grading assignments, and conducting exams.",
          color: "#4285F4",
        },
        {
          title: "Research Assistant",
          company: "Vlabs",
          company_url: "https://vlabs.ac.in/",
          logo_path: "vlabs_logo-removebg.png",
          duration: "Spring 2022",
          location: "Hyderabad, Telangana",
          description:
            "Guided students in developing virtual labs for various courses. Did code reviews and helped students with any doubts they had. Researched on potential technologies to use for the labs and future development.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        // {
        //   title: "Google Explore ML Facilitator",
        //   company: "Google",
        //   company_url: "https://about.google/",
        //   logo_path: "google_logo.png",
        //   duration: "June 2019 - April 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
        //   color: "#4285F4",
        // },
        // {
        //   title: "Microsoft Student Partner",
        //   company: "Microsoft",
        //   company_url: "https://www.microsoft.com/",
        //   logo_path: "microsoft_logo.png",
        //   duration: "Aug 2019 - May 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        {
          title: "Cloud Lead, Developer Students Club",
          company: "DSC IIIT Hyderabad",
          company_url:
            "https://www.linkedin.com/company/google-developer-student-clubs-iiit-hyderabad/?originalSubdomain=in",
          logo_path: "gdsc.png",
          duration: "Sep 2021 - Sep 2022",
          location: "Hyderabad, Telangana",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. I lead the cloud team of the club and we conduct workshops and events on cloud technologies and services.",
          color: "#0C9D58",
        },
        {
          title: "Facilitator, 30 Days of Google Cloud",
          company: "DSC IIIT Hyderabad",
          company_url: "https://www.youtube.com/watch?v=jnnBtUzr9fY",
          logo_path: "gdsc.png",
          duration: "Sep 2021",
          location: "Hyderabad, Telangana",
          description:
            "I was a facilitator for the 30 Days of Google Cloud program. I conducted a workshop on Google Cloud Platform and its services and guided students through the program. I was in direct contact with the Google Cloud team, attending meetings and workshops with them.",
          color: "#0C9D58",
        },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "Everything I've worked on.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "I have worked on and published a few research papers.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name:
        "Scalable and Interoperable Distributed Architecture for IoT in Smart Cities",
      createdAt: "30th May 2024",
      description:
        "A paper written to introduce a scalable and distributed architecture to improve the performance of the OneM2M compilant Interoperability framework for IoT in smart cities.\nAccepted at WF-IOT 2023 (IEEE World Forum on Internet of Things)",
      url: "https://ieeexplore.ieee.org/document/10539501",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name:
        "Exploratory Study of oneM2M-based Interoperability Architectures for IoT: A Smart City Perspective",
      createdAt: "NA",
      description:
        "A paper written to explore the various oneM2M-based Interoperability Architectures for IoT in smart cities.\nAccepted in SAIP track at ICSA 2024 (International Conference on Software Architecture)",
      url:
        "https://www.techrxiv.org/users/693598/articles/739724-exploratory-study-of-onem2m-based-interoperability-architectures-for-iot-a-smart-city-perspective",
      // "/wip?data=UGFwZXIgc3RpbGwgaW4gcHJlcHJpbnQgc3RhZ2UuIFdpbGwgYmUgcHVibGlzaGVkIHNvb24u",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_placeholder_user.png",
    description:
      "Contact me for any queries or collaboration. I am always available for a chat. You can also ask me about my projects, research or anything you want to know.",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
