import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

export default function Age() {

    const [age, setAge] = useState(0);
    const dispatch = useDispatch();

    const handleUpdateAge = () => {
        console.log(age);
        dispatch({
            type: "SET_AGE",
            payload: age,
        })
    }
  return (
    <div>
        <input type= {"number"} value={age} 
        onChange={ (e)=>{
        setAge(e.target.value)
    }}/>

        <button onClick={handleUpdateAge}>Update Age</button>
    </div>
  )
}
