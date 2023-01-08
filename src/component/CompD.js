import React from 'react'
import CompE from './CompE'

export default function CompD(props) {
  return (
    <div>
        CompD: {props.counter}

        <CompE  counter={props.counter} setCounter= {props.setCounter}/>
    </div>
  )
}
