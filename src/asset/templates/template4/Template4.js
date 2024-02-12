import { Paper } from "@mui/material";
import React from "react";
import styles from './template4.module.css'
import TemplateProfileImg from '../../../components/TemplateComponents/TemplateProfileImg'
import TemplateProfileName from '../../../components/TemplateComponents/TemplateProfileName'
import TemplateContactINfo from '../../../components/TemplateComponents/TemplateContactINfo'
import TemplateObjective from '../../../components/TemplateComponents/TemplateObjective'
import TempHeading from '../../../components/TemplateComponents/TempHeading'
import { data } from "../../data/data";
import TemplateExperience from '../../../components/TemplateComponents/TemplateExperience'
import TemplateEducation from "../../../components/TemplateComponents/TemplateEducation";
import TemplateKeySkill from "../../../components/TemplateComponents/TemplateKeySkills";



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

    <div className={styles.templateheader}>
      <div className={styles.top}></div>
      <div className={styles.profile}>
      <div className={styles.profileImg}>
        <TemplateProfileImg personalInfo={personalinfo} />
      </div>
      <div className={styles.profileName}>
        <TemplateProfileName personalInfo={personalinfo} workExperience={workexperience} />
        <hr className={styles.line} /> 
      </div>
       </div>
     
    </div>

    <div className={styles.templatemid}>
      <div className={styles.leftsection}>
        <div className={styles.contact}>
          <TemplateContactINfo personalInfo={personalinfo}/>
        </div>

        <div className={styles.skills}>
          <TempHeading color={"#443f45"}  title={"Skills"} />
          <ul style={{ marginBottom: 10 }}>
            {skills.map((skill, index) => {
              return <TemplateKeySkill key={index} skill={skill} />;
            })}
          </ul>
        </div>

        <div className={styles.education}>
          <TempHeading color={'#443f45'} title={"Education"} />  
          <TemplateEducation education={educationinfo} />

        </div>
      </div>


      <div className={styles.rightSection}>
        <div className={styles.objective}>
        <TempHeading color={'#443f45'} title={"Objective"} />
      
        <TemplateObjective personalInfo={personalinfo} />
        </div>
        <div className={styles.workExperience}>
        <TempHeading color={"#443f45"}  title={"Work Experience"} />
        
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

export default Template4;
