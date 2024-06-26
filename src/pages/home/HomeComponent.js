import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
// import TopButton from "../../components/topButton/TopButton";
import GHWorkflow from "../../containers/ghworkflow/GHWorkflow";

class Home extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <GHWorkflow theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        {/* <TopButton theme={this.props.theme} /> */}
      </div>
    );
  }
}

export default Home;
