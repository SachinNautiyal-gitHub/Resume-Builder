import React from 'react'

const TemplateContactINfo = (props) => {
  return (
    <div className='contact-info'>
          <p
          style={{ color: props.primaryColor }}
          className="template-header-second">
          {props.personalInfo.address}<br/>
          {props.personalInfo.city} &nbsp;
          {props.personalInfo.country} &nbsp;
          {props.personalInfo.postalCode}<br/>
          {props.personalInfo.mobile}<br/>
          {props.personalInfo.email}<br/>
        </p>
    </div>
  )
}

export default TemplateContactINfo
