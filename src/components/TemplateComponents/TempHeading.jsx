import React from 'react'


const TempHeading = (props) => {
  return (
    <div>

      <p
        style={{ color: props.color, fontSize:'20px' , fontWeight:'bold',fontFamily:'unset'}}
        className="heading">
        {props.title}
      </p>
    </div>
  )
}

export default TempHeading
