import React from "react";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
            <header>
                <nav className="navbar">
                    <ul className="nav">
                        <li>
                            <Link to="/" className="link">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="link">About</Link>
                        </li>
                        <li>
                            <Link to="/contactus" className="link">ContactUS</Link>
                        </li>
                        <li>
                            <Link to="/login" className="link">LogIn</Link>
                        </li>
                    </ul>
                </nav>
            </header>
    )
}
export default Navbar;