import React, { useState, useEffect } from "react";
import '../App.css'
// use global context
import { UseGlobalContext } from "./GlobalContext/WorkoutContext";
// use auth context
import { UseAuthContext } from './GlobalContext/AuthContext';
// action
import { POST_WORKOUT } from "./Action/Action";
const AddWorkOut = () => {
    const { dispatch } = UseGlobalContext();
    const { user } = UseAuthContext();
    const [workOut, setWorkOut] = useState('');
    const [reps, setReps] = useState(0);
    const [weight, setWeight] = useState(0);
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let obj = { workout: workOut, reps, weight }
            const postData = await fetch('http://localhost:5000/api/v1/addWorkout/', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${user.token}`
                 },
                authorization: {},
                body: JSON.stringify(obj)
            });
            const response = await postData.json();
            if (!postData.ok) {
                setError(response.response.responseDescription)
            }
            if (postData.ok) {
                setError('');
                setReps(0);
                setWeight(0);
                setWorkOut('');
                dispatch({ type: POST_WORKOUT, payload: response.response })
            }

        } catch (err) {
            setError(err.message)
        }
    }
    return (
        <div className="form-parent">
        <form className="form" onSubmit={handleSubmit}>
            {/* workout detail */}
            <div className="form-control">
                <label htmlFor="workout-detail">Workout Detail add workout:</label>
                <input type='text' id="workout-detail" value={workOut} placeholder="work out detail" name="workout" onChange={(e) => setWorkOut(e.target.value)} />
            </div>
            {/* reps */}
            <div className="form-control">
                <label htmlFor="reps">Reps:</label>
                <input type='number' id="reps" value={reps} name="reps" onChange={(e) => setReps(e.target.value)} />
            </div>
            {/* reps */}
            <div className="form-control">
                <label htmlFor="weigth">Weight Lose:</label>
                <input type='number' id="weigth" value={weight} name="weight" onChange={(e) => setWeight(e.target.value)} />
            </div>
            <button type="submit">Add WorkOut</button>
        </form>
            { error && <div><h1 className="form-error">{error}</h1></div> }
        </div>

    )
}

export default AddWorkOut