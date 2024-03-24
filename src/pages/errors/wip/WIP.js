import React, { Component } from "react";
import Header from "../../../components/header/Header";
// import TopButton from "../../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default class WIP extends Component {
  render() {
    const theme = this.props.theme;

    // Styling with styled-components
    const StyledDataSpotlight = styled.div`
      background-color: ${(props) => props.theme.compImgHighlight};
      padding: 15px;
      border-radius: 5px;
      margin: 20px 0;

      pre {
        overflow-wrap: break-word;
        white-space: pre-wrap;
      }
    `;

    // get data from url query
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let data = urlParams.get("data");
    const encrypted = urlParams.get("encrypted")
      ? urlParams.get("encrypted") === "true"
      : true;

    if (data) {
      if (encrypted) {
        // convert data from base64 to string
        try {
          data = atob(data);
        } catch (e) {
          console.error("Error decoding base64 data", e);
          data = "Bruh even I got no clue why";
        }
      } else {
        // update url ending to be base64
        window.history.replaceState(
          null,
          null,
          window.location.pathname + `?data=${btoa(data)}`
        );
      }
    }

    return (
      <div className="error-main">
        <Header theme={this.props.theme} />
        <div className="error-class">
          <Fade bottom duration={2000} distance="40px">
            <h1 className="error-title">Under Construction</h1>
            <p className="error-subtitle">
              This area is still a work in progress. Here's a sneak peek:
            </p>

            <StyledDataSpotlight theme={this.props.theme}>
              <pre>{data}</pre>
            </StyledDataSpotlight>

            <Link
              to="/home"
              className="main-button"
              style={{
                color: theme.body,
                backgroundColor: theme.text,
                border: `solid 1px ${theme.text}`,
                display: "inline-flex",
              }}
            >
              Go Home
            </Link>
          </Fade>
        </div>
        {/* <TopButton theme={this.props.theme} /> */}
      </div>
    );
  }
}
