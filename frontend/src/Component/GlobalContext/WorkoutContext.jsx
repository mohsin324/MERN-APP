import React, { createContext, useContext, useReducer } from "react";

// initial state
const initialState = {
    workout: null
}
// create context
export const CreateContext = createContext();
// use context 
export const UseGlobalContext = () => useContext(CreateContext);
// reducer
const reducer = (state, action) => {
    switch(action.type){ 
        case 'GET_WORKOUT':
            return { workout: action.payload.response}
        case 'POST_WORKOUT':
            console.log(action.payload, ' action.payload.....');

            return {  workout: [...state.workout, action.payload] }
        case 'DELETE_WORKOUT':
            const newWorkout = state.workout.filter(id => {
                return  id._id !== action.payload 
            })
            return { workout: [...newWorkout]}
            
            
        default: 
            return state
    }
}

const GlobalContext = ({children}) => {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    return (
        <CreateContext.Provider value={{ ...state, dispatch }}>
            { children }

        </CreateContext.Provider>
    )
}
export default GlobalContext;