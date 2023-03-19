import React from 'react'

function Group(props) {
  return (
    <div>

<p>Name: {props.groupNameColor.name}</p>
      <p>Choice: {props.groupNameColor.color}</p>

    </div>
  )
}

export default Group