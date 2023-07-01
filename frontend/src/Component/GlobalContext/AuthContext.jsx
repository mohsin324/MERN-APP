import React, { useEffect, createContext, useContext, useReducer } from "react";
import { SIGN_IN, SIGN_OUT } from "../Action/Action";
// initial state
export const user = {
    user: null
}
// create context
export const AuthContext = createContext(user);
// use context 
export const UseAuthContext = () => useContext(AuthContext);
// create reducer
const authReducer = (state, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { user: action.payload }
        case SIGN_OUT:
            return { user: null }
        default:
            return { user: null }
    }
}

// create auth context provider
const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, user);
    // fecthing user token from localstorage
    useEffect(() => {
        const getUser = JSON.parse(localStorage.getItem('user'));
        if(getUser){
            dispatch({ type: SIGN_IN, payload: getUser})
        }
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}

        </AuthContext.Provider>

    )
}

export default AuthContextProvider;