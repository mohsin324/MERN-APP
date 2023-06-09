import React from "react";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navbar">
            <header>
                <nav>
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
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Navbar;