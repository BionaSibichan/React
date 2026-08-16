import React from 'react'

function StudentCard(props) {
  return (
    <div>
        <h4> {props.name}</h4>
                 <p>Place:{props.place}</p>
                 <p>Course:{props.course}</p>
    </div>

  )
}

export default StudentCard