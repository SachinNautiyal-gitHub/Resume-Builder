import React from 'react'

const TemplateProfileName = (props) => {
  return (
   <>
   <div className="userDetails">
    <div className="username">
    <h1>{props.personalInfo.firstName + " " + props.personalInfo.lastName}</h1>
    </div>
    <div className="profilename">
    {props.workExperience[0].jobTitle}
    </div>
   </div>
   
   
   </>
  )
}

export default TemplateProfileName
