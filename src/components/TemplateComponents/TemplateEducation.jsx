// import "../Styles/TemplateEducation.css";
import React from 'react'

const TemplateEducation = (props) => {
  return (
    <>
      <p className="template-education-details">
      <p  style={{fontSize:'15px', fontWeight:'600'}}>{props.education.degree} </p>
      {props.education.domain}</p>   
      <p className="template-education-university">
        {props.education.university}
      </p>
       <p className="education-start-end">
        ({props.education.startYear} - {props.education.endYear})
      </p>
    
    </>
    
  )
}

export default TemplateEducation

