import React, { useState, useEffect } from "react";
import { UseAuthContext } from "../Component/GlobalContext/AuthContext";
import { SIGN_IN } from "../Component/Action/Action";
export const useSignUp = () => {
    const { dispatch } = UseAuthContext();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const signup = async (email, password) => {
        try {
            let obj = { email, password }
            const postData = await fetch('http://localhost:5000/api/v1/user/SignUp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(obj)
            });
            const response = await postData.json();
            setIsLoading(true)
            if (!postData.ok) {
                setError(response.response.responseDescription)
            }
            if (postData.ok) {
                setIsLoading(false)
                setError('');
                // save values in localstorage
                localStorage.setItem('user', JSON.stringify(response))
                dispatch({ type: SIGN_IN, payload: response })
            }
        } catch (err) {
            setError(err.message)
        }
    }
    return { signup, error, isLoading }
}