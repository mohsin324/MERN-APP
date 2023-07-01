import React from "react";
import { Link } from 'react-router-dom';
import { UseAuthContext } from '../Component/GlobalContext/AuthContext';
import { useLogOut } from '../Hook/LogOut';
const Navbar = () => {
    const { user } = UseAuthContext();
    const { logout } = useLogOut();
    const handleSignOut = () => {
        logout()
    }
    return (
        <header className="nav" >
            {
                user && (
                    <div >
                        <span>{user.user.email}</span>
                    </div>
                )
            }
            <nav>
                <ul className="navbar">
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
                        {
                            user ? <button onClick={handleSignOut}>SignOut</button> : <Link to="/login" className="link">LogIn</Link>
                        }
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;