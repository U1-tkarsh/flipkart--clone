import React from 'react'
import CompD from './CompD';

export default function CompB(props) {

  return (
    <div>
        CompB
        <CompD counter={props.counter} setCounter= {props.setCounter}/>
    </div>
  )
}
