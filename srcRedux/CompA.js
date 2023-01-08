import React from 'react'
import { useDispatch ,useSelector } from 'react-redux';

export default function CompA() {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const handleUpdateInc = () => {
            dispatch({
                type: "COUNTER_INCREMENT",

            });
    }

    const handleUpdateDcr = () => {
            dispatch({
                type: "COUNTER_DECREMENT",

            });
    }
  return (
    <div>
        CompA: {counter}    <br /><br />
        <button onClick={handleUpdateInc}>Update-Inc</button><br /><br />
        <button onClick={handleUpdateDcr}>Update-Dcr</button>
    </div>
  )
}
