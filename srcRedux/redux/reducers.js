const initialState= {
    counter: 10,
    name: "Utkarsh",
    age: 45
}

/**
    action = {
        type: String,
        payload:    //used to send additional data along with Action
    }
 */
const reducer = (currState = initialState, action) => {
    switch (action.type) {
        case "COUNTER_INCREMENT":
            return{
                ...currState,
                counter: currState.counter + 1
            }
         case "COUNTER_DECREMENT":
            return{
                ...currState,
                counter: currState.counter - 1
            }

        case "SET_AGE":
            return {
                ...currState,
                age: action.payload
            }
            default:
                return currState;
    }
}

export default reducer;