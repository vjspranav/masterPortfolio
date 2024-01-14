import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import ResearchImg from "./ResearchImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import StagImg from "./StagImg";
import DesignImg from "./DesignImg";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  else if (props.fileName === "ResearchImg")
    return <ResearchImg theme={props.theme} />;
  else if (props.fileName === "StagImg") return <StagImg theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, idx) => {
          return (
            <div className="skills-main-div">
              {idx % 2 === 0 ? (
                <Fade left duration={2000}>
                  <div className="skills-image-div">
                    <GetSkillSvg fileName={skill.fileName} theme={theme} />
                  </div>
                </Fade>
              ) : (
                <div className="skills-text-div">
                  <Fade left duration={1000}>
                    <h1
                      className="skills-heading"
                      style={{ color: theme.text }}
                    >
                      {skill.title}
                    </h1>
                  </Fade>
                  <Fade left duration={1500}>
                    <SoftwareSkill logos={skill.softwareSkills} />
                  </Fade>
                  <Fade left duration={2000}>
                    <div>
                      {skill.skills.map((skillSentence) => {
                        return (
                          <p
                            className="subTitle skills-text"
                            style={{ color: theme.secondaryText }}
                          >
                            {skillSentence}
                          </p>
                        );
                      })}
                    </div>
                  </Fade>
                </div>
              )}
              {idx % 2 === 0 ? (
                <div className="skills-text-div">
                  <Fade right duration={1000}>
                    <h1
                      className="skills-heading"
                      style={{ color: theme.text }}
                    >
                      {skill.title}
                    </h1>
                  </Fade>
                  <Fade right duration={1500}>
                    <SoftwareSkill logos={skill.softwareSkills} />
                  </Fade>
                  <Fade right duration={2000}>
                    <div>
                      {skill.skills.map((skillSentence) => {
                        return (
                          <p
                            className="subTitle skills-text"
                            style={{ color: theme.secondaryText }}
                          >
                            {skillSentence}
                          </p>
                        );
                      })}
                    </div>
                  </Fade>
                </div>
              ) : (
                <Fade right duration={2000}>
                  <div className="skills-image-div">
                    <GetSkillSvg fileName={skill.fileName} theme={theme} />
                  </div>
                </Fade>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
