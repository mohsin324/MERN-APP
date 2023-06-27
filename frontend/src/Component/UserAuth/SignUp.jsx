import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSignUp } from '../../Hook/SignUpHook';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup, error, isLoading } = useSignUp();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(email, password);
    }
    return (
        <div className="login-form">
            <h3>SignUp</h3>
            <form className="form" onSubmit={handleSubmit}>
                {/* email */}
                <div className="form-control">
                    <label htmlFor="email">Email:</label>
                    <input type='email' id="email" value={email} placeholder="user email" name="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                {/* password */}
                <div className="form-control">
                    <label htmlFor="password">Password:</label>
                    <input type='password' id="password" value={password} name="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <p>has account? <span> <Link to="/login">LogIn</Link> </span> </p>
                </div>
                <button type="submit">Submit Form</button>
            </form>
            {error && <div><h1 className="form-error">{error}</h1></div>}
        </div>

    )
}

export default SignUp