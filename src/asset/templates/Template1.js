import { Paper } from "@mui/material";
import React from "react";
import "./Styles/template1.css"
import TemplateProfileImg from '../../components/TemplateComponents/TemplateProfileImg'
import TemplateProfileName from '../../components/TemplateComponents/TemplateProfileName'
import TemplateContactINfo from '../../components/TemplateComponents/TemplateContactINfo'
import TemplateObjective from '../../components/TemplateComponents/TemplateObjective'
import TempHeading from '../../components/TemplateComponents/TempHeading'
import { data } from "../data/data";
import TemplateExperience from '../../components/TemplateComponents/TemplateExperience'
import TemplateEducation from "../../components/TemplateComponents/TemplateEducation";
import TemplateKeySkill from "../../components/TemplateComponents/TemplateKeySkills";

const Template1 = (props) => {
  const personalinfo = props.personalinfo
    ? props.personalinfo
    : data.personal_info;
  const workexperience = props.workexperience
    ? props.workexperience
    : data.work_experience;
  const educationinfo = props.educationinfo
    ? props.educationinfo
    : data.education_details;
  const skills = props.skills ? props.skills : data.key_skills;

  return (
    <Paper
      sx={{
        width: {
          xs: "350px",
          sm: "400px",
          md: "450px",
          lg: "500px",
          xl: "600px",
        },
        height: {
          xs: "500px",
          sm: "550px",
          md: "600px",
          lg: "650px",
          xl: "700px",
        },
      }}
      id={`${props.index}report`}
      elevation={3}>
      {/* <HeaderSection
        primaryColor={"#2196f3"}
        secondaryColor={"black"}
        bgColor={"white"}
        hrcolor={"#2196f3"}
        Hdownheight={"3px"}
        hrsecondcolor={"none"}
        personalInfo={personalinfo}
        workExperience={workexperience}
      /> */}

      <div className="template-header">
        <div className="profileName">
          <TemplateProfileName personalInfo={personalinfo} workExperience={workexperience} />
        </div>
        <div className="profileImg">
          <TemplateProfileImg personalInfo={personalinfo} />
        </div>
      </div>

      <div className="template-mid">
        <div className="leftsection">
          <div className="contact">
            <TemplateContactINfo personalInfo={personalinfo}/>
          </div>

          <div className="education">
            <TempHeading color={'black'} title={"Education"} />
            <TemplateEducation education={educationinfo} />

          </div>

          <div className="skills">
            <TempHeading color={"black"}  title={"Key Skills"} />
            <ul style={{ marginBottom: 10 }}>
              {skills.map((skill, index) => {
                return <TemplateKeySkill key={index} skill={skill} />;
              })}
            </ul>
          </div>
        </div>


        <div className="rightSection">
          <div className="objective">
          <TemplateObjective personalInfo={personalinfo} />
          </div>
          <div className="workExperience">
          <TempHeading color={"black"}  title={"Professional Experience"} />
          <ul style={{ marginBottom: 10 }}>
            {workexperience.map((experience, index) => {
              return (
                <TemplateExperience
                  key={index}
                  experience={experience}
                />
              );
            })}
          </ul>
          </div>      
        </div>
      </div>

    </Paper>
  );
};

export default Template1;
