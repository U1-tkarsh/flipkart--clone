import React from 'react'

export default function (props) {
    const handleClick=()=>{
        props.setCounter(70);
      }

  return (
    <div>
        CompE: {props.counter}
        <button onClick={handleClick}>Update</button>
    </div>
  )
}
