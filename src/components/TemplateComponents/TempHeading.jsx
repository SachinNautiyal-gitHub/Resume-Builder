import React from 'react'

const TempHeading = (props) => {
  return (
    <div>
      {/* <hr style={{ backgroundColor: props.Hupcolor, height: props.Hupheight }} className="vertical-line" /> */}
      <p
        style={{ color: props.color, fontSize:'25px', fontWeight:"bold", fontFamily:'unset'}}
        className="professional-experience-heading">
        {props.title}
      </p>
      {/* <hr style={{ backgroundColor: props.Hdowncolor, height: props.Hdownheight }} className="vertical-line" /> */}
    </div>
  )
}

export default TempHeading
