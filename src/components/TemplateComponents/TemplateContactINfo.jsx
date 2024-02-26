import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const TemplateContactINfo = (props) => {
  return (
    <div className='contact-info'>
          <div className="template-header-second" >
         <p style={{paddingBottom:'4px',display:'flex', flexWrap:'wrap',alignSelf:'center'}}> <LocationOnIcon sx={{ display: { xs: 'none', sm: 'block' }}}/> {props.personalInfo.address}<br/>{props.personalInfo.city} {props.personalInfo.country} {props.personalInfo.postalCode}</p> 
         
          <p style={{ paddingBottom:'4px',display:'flex',flexWrap:'wrap', alignSelf:'center'}}><LocalPhoneIcon sx={{ display: { xs: 'none', sm: 'block' }}}/>{props.personalInfo.mobile}</p>
          <p style={{ paddingBottom:'4px',display:'flex',flexWrap:'wrap',alignSelf:'center'}}><EmailIcon sx={{ display: { xs: 'none', sm: 'block' }}}/>{props.personalInfo.email}</p>
        </div>
    </div>
  )
}

export default TemplateContactINfo
