import React, { useState } from "react";
import { UseAuthContext } from "../Component/GlobalContext/AuthContext";
import { SIGN_IN } from "../Component/Action/Action";
export const useLogIn = () => {
    const { dispatch } = UseAuthContext();
    const [error, setError] = useState('');
    const logIn = async (email, password) => {
        try {
            let obj = { email, password }
            console.log(typeof (obj), ' obj type ')
            const postData = await fetch('http://localhost:5000/api/v1/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(obj)
            });
            console.log(postData)
            const response = await postData.json();
            console.log(response)
            if (!postData.ok) {
                setError(response.response.responseDescription)
            }
            if (postData.ok) {
                setError('');
                // store items in localstorage
                localStorage.setItem('user', JSON.stringify(response));
                dispatch({ type: SIGN_IN, payload: response })
            }

        } catch (err) {
            console.log(err)
            setError(err.message)
        }
    }
    return { logIn, error }
}