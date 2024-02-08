import React from 'react'

const TemplateProfileName = (props) => {
  return (
   <>
   <div className="userDetails">
    <div className="username">
    {props.personalInfo.firstName + " " + props.personalInfo.lastName}
    </div>
    <div className="profilename">
    {props.workExperience[0].jobTitle}
    </div>
   </div>
   
   
   </>
  )
}

export default TemplateProfileName
