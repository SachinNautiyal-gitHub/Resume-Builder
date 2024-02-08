import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const TemplateContactINfo = (props) => {
  return (
    <div className='contact-info'>
          <div className="template-header-second" >
         <p style={{paddingBottom:'10px',display:'flex'}}> <LocationOnIcon sx={{paddingRight:'6px',}}/> {props.personalInfo.address}<br/>{props.personalInfo.city} {props.personalInfo.country} {props.personalInfo.postalCode}</p> 
         
          <p style={{ paddingBottom:'10px',display:'flex',}}><LocalPhoneIcon sx={{paddingRight:'6px'}}/>{props.personalInfo.mobile}</p>
          <p style={{ paddingBottom:'10px',display:'flex',}}><EmailIcon sx={{paddingRight:'6px'}}/>{props.personalInfo.email}</p>
        </div>
    </div>
  )
}

export default TemplateContactINfo
