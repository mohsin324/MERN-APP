import React, { useState, useEffect } from "react";
import AddWorkOut from "./AddWorkOut";
import Workout from "./workout";
// useGlobalContext
import { UseGlobalContext } from "./GlobalContext/WorkoutContext";
// useAuthContext
import { UseAuthContext } from "./GlobalContext/AuthContext";
import { SIGN_IN, GET_WORKOUT } from "./Action/Action";
const Home = () => {
    const { workout, dispatch } = UseGlobalContext();
    const { user } = UseAuthContext();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        const fetchWorkOut = async () => {
            try {
                const workOut = await fetch('http://localhost:5000/api/v1/getWorkout',
                {
                    method: 'GET',
                    headers: {'Authorization': `Bearer ${user.token}`}
                }
                );
                const jsonData = await workOut.json();
                if (!workOut.ok) {
                    setIsLoading(false);
                    setIsError(true)
                }
                setIsLoading(false)   
                dispatch({type: GET_WORKOUT, payload: jsonData })
            } catch (error) {
                console.log(error);
                setIsError(true);
            }
        }
        fetchWorkOut()
        user ? fetchWorkOut() : (dispatch({type: SIGN_IN}), setIsLoading(false));
    }, [dispatch, user])

    if (isLoading) {
        return <h1 className="loading">...Loading</h1>
    }
    if (isError) {
        return <h1 className="error">...Error</h1>
    }
    return (
        <div className="home">
            <h1>Home</h1>
            {
               workout && workout.map((index) => {
                    return (
                        <Workout key={index._id} {...index} />
                    )
                })
            }
            <span className="add-workout">
                <AddWorkOut />
            </span>
        </div>
    )
}
export default Home;