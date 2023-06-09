import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
// component
import Home from "./Component/Home";
import About from "./Component/About";
import ContactUS from "./Component/ContactUS";
import Navbar from "./Component/Navbar";
import UpDateWorkOut from './Component/UpDateWorkOut';
const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route exact="/" path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contactus" Component={ContactUS} />
          <Route path="/updateworkout/:id" Component={UpDateWorkOut} />
          <Route path="*" Component={Home} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;