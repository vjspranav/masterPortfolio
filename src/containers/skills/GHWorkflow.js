import React from "react";
import "./Skills.css";
import GitHubCalendar from "react-github-calendar";
import { Fade } from "react-reveal";

export default function GHWorkflow(props) {
  const theme = props.theme;
  const themeInput = {
    dark: [
      theme.secondaryText,
      theme.highlight,
      theme.headerColor,
      theme.imageHighlight,
      theme.text,
    ],
  };

  return (
    <div
      className="main"
      id="skills"
      style={{
        width: "max-content",
      }}
    >
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            When I Do?
          </h1>
        </Fade>
      </div>
      <GitHubCalendar
        sx={{}}
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        theme={themeInput}
        username="vjspranav"
      />
    </div>
  );
}
