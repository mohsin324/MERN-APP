import React from "react";
import { UseGlobalContext } from "./GlobalContext/WorkoutContext";
import { Link } from 'react-router-dom';
const Workout = (index) => {
    const { dispatch } = UseGlobalContext();
    const handleDelete = async() => { 
        const deleteWorkout = await fetch(`http://localhost:5000/api/v1/deleteworkout/${index._id}`, {
            method: 'DELETE'
        })
        let response = await deleteWorkout.json();
        if(deleteWorkout.ok){
            dispatch({ type: 'DELETE_WORKOUT', payload: response.data._id })
        }
    }
    return (
        <div className="workout">
            <h3><span>Workout:</span> {index.workout}</h3>
            <p><span>Reps:</span> {index.reps}</p>
            <p><span>Weight:</span> {index.weight}</p>
            <button className="btn-delete" onClick={ handleDelete}>Delete</button>
            {/* <button className="btn-update">
                <Link to={`updateworkout/${index._id}`}>Update</Link>
            </button> */}

        </div>
    )
}
export default Workout;