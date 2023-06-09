import React, { useState, useEffect } from "react";
// use global context
import { UseGlobalContext } from "./GlobalContext/WorkoutContext";
const AddWorkOut = () => {
    const { dispatch } = UseGlobalContext();
    const [workOut, setWorkOut] = useState('');
    const [reps, setReps] = useState(0);
    const [weight, setWeight] = useState(0);
    const [ error, setError ] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        let obj = {
            workout: workOut,
            reps: reps,
            weight: weight
        }
        try {
            const postData = await fetch('http://localhost:5000/api/v1/addWorkout/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(obj)
            });
            const response = await postData.json();
            console.log(response, ' response post data ')
            console.log(response.response, ' response response')
            if(!postData.ok){
                setError(true)
            }
            if(postData.ok){
                setError(false);
                setReps(0);
                setWeight(0);
                setWorkOut('');
                dispatch({ type: 'POST_WORKOUT', payload: response.response })
            }

        } catch (err) {
            setError(true)
        }
        if(error){
            return <h1 className="loading">There is an Error</h1>
        }
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            {/* workout detail */}
            <div className="form-control">
                <label htmlFor="workout-detail">Workout Detail:</label>
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
            <button>Add WorkOut</button>
        </form>
    )
}

export default AddWorkOut