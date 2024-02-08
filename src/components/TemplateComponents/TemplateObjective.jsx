import React from 'react'

const TemplateObjective = (props) => {
  return (
    <div className='objective'>
       <p
        style={{ color: props.secondaryColor }}
        className="template-user-about">
        {props.personalInfo.objective}
      </p>
    </div>
  )
}

export default TemplateObjective
