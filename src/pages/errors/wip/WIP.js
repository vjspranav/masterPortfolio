import React, { Component } from "react";
import Header from "../../../components/header/Header";
import TopButton from "../../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

export default class WIP extends Component {
  render() {
    const theme = this.props.theme;
    const secretString = "BlahUhyuiop";

    // get data from url query
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const data = urlParams.get("data");
    if (data) {
      // update url ending to random string
      const randomString = Math.random().toString(36).substring(7);
      window.history.pushState({}, document.title, `${randomString}`);
    }

    return (
      <div className="error-main">
        <Header theme={this.props.theme} />
        <div className="error-class">
          <Fade bottom duration={2000} distance="40px">
            <h1>Woops</h1>
            <h1>We are still under construction</h1>
            <p>The requested page is unavailable at the moment!</p>
            <p>{data ? data : "Bruh even I got no clue why"}</p>
            <Link
              className="main-button"
              to="/home"
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
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}