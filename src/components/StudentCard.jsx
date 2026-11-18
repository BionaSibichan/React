import React from 'react'

function StudentCard(props) {
  return (
    <div>
              <img src={props.profile} alt="Profile" style={{width:"200px",height:"auto"}} />

        <h4> {props.name}</h4>
        <p>Phone:{props.phone}</p>
        <p>Address:{props.address}</p>
        <p>DOB:{props.dob}</p>
        <p>Course:{props.course}</p>
    </div>

  )
}

export default StudentCard