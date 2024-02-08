import React from 'react'

const TemplateProfileImg = (props) => {
    return (
        <div className='profile-img-section'>
            <img className='progile-img'
                src={props.personalInfo.profileImg}
                alt="profile" />
        </div>
    )
}

export default TemplateProfileImg
