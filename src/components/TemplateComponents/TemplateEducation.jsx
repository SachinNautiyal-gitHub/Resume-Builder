// import "../Styles/TemplateEducation.css";
import React from 'react'

const TemplateEducation = (props) => {
  return (
    <p className="template-education-details">
      {props.education.degree} in {props.education.domain}{" "}
      <span className="template-education-university">
        {props.education.university}
      </span>
      <span className="education-start-end">
        ({props.education.startYear} - {props.education.endYear})
      </span>
    </p>
  )
}

export default TemplateEducation

