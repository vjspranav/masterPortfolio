import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Fade } from "react-reveal";
import "./GHWorkflow.css";

export default function GHWorkflow(props) {
  const theme = props.theme;
  return (
    <div className="main">
      <div className="gh-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="gh-header" style={{ color: theme.text }}>
            When I Do?
          </h1>
        </Fade>
      </div>
      <div className="gh-main-div">
        <GitHubCalendar
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
          blockSize={window.innerWidth < 600 ? 12 : 20}
          blockMargin={7}
          fontSize={window.innerWidth < 600 ? 12 : 16}
          color={theme.text}
          username="vjspranav"
        />
      </div>
    </div>
  );
}
