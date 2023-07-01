import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.css'
// component
import Home from "./Component/Home";
import About from "./Component/About";
import ContactUS from "./Component/ContactUS";
import Navbar from "./Component/Navbar";
import UpDateWorkOut from './Component/UpDateWorkOut';
// auth component
import LogIn from "./Component/UserAuth/LogIn";
import SignUp from "./Component/UserAuth/SignUp";
import { UseAuthContext } from "./Component/GlobalContext/AuthContext";
const App = () => {
  const { user } = UseAuthContext();
  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="pages">
        <Routes>
          <Route exact="/" path="/" element={user ? <Home /> : <Navigate to='/login' />} />
          <Route path="/about" Component={About} />
          <Route path="/contactus" Component={ContactUS} />
          <Route path="/updateworkout/:id" Component={UpDateWorkOut} />
          <Route path="/login" element={!user ? <LogIn /> : <Navigate to="/" />} />
          <Route path="/signup" element={!user ? <SignUp /> : <Navigate to="/" />} />
          <Route path="*" Component={Home} />
        </Routes>
        </div>

      </Router>
    </div>
  )
}

export default App;