import React from 'react'
// import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CompA from './CompA';
import Age from './redux/Age';

function App() {

  // const[counter, setCounter]  = React.useState(0);
  const counter  = useSelector(state => state.counter);
  const age  = useSelector(state => state.age);

  return (
    <div>
        App: {counter}
        <br/>

        Age: {age}
        <CompA />

        <Age/>
    </div>
  );
}

export default App;