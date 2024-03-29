import React from 'react'
import { Container } from "@mui/material";

const TemplateExperience = (props) => {
  return (
    <Container className="template-one-experience-comp">
    <li className="template-one-experience-comp">
      <h3 className="experience-heading">
        {props.experience.jobTitle}{" "} </h3>
        <p> <span className="experience-org-name">
          {props.experience.organizationName}
        </span>
        <span className="experience-start-end">
          ({props.experience.startYear} - {props.experience.endYear})
        </span></p>
        <p style={{fontSize:'12px'}}>{props.experience.details}</p>
    </li>
  </Container>
  )
}

export default TemplateExperience

