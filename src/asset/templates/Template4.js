import { Container, Paper } from "@mui/material";
import React from "react";
import "./template.css";
import HeaderSection from '../../components/TemplateComponents/HeaderSection'
import TempHeading from '../../components/TemplateComponents/TempHeading'
import { data } from "../data/data";
import TemplateExperience from '../../components/TemplateComponents/TemplateExperience'
import TemplateEducation from "../../components/TemplateComponents/TemplateEducation";
import TemplateKeySkill from "../../components/TemplateComponents/TemplateKeySkills";


const Template4 = (props) => {
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
      <HeaderSection
        primaryColor={"#9B536F"}
        secondaryColor={"black"}
        bgColor={"white"}
        hrcolor={"#9B536F"}
        hrsecondcolor={"none"}
        personalInfo={personalinfo}
        workExperience={workexperience}
      />
      <Container>
        <TempHeading color={"#9B536F"} Hupcolor={"none"} Hupheight={"none"} Hdowncolor={"#9B536F"} Hdownheight={"none"} title={"Professional Experience"} />
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
        <TempHeading color={"#9B536F"} Hupcolor={"none"} Hupheight={"none"} Hdowncolor={"#9B536F"} Hdownheight={"none"} title={"Education"} />
        <TemplateEducation education={educationinfo} />
        <TempHeading color={"#9B536F"} Hupcolor={"none"} Hupheight={"none"} Hdowncolor={"#9B536F"} Hdownheight={"none"} title={"Key Skills"} />
        <ul style={{ marginBottom: 10 }}>
          {skills.map((skill, index) => {
            return <TemplateKeySkill key={index} skill={skill} />;
          })}
        </ul>
      </Container>
    </Paper>
  );
};

export default Template4;
