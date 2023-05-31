import React from 'react'
import "./navbar.css"
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  }
  const handleLogin = () =>{
    navigate("/login")
  }
  return (
    <div className="navbar">
        <div className="navContainer">
            <span 
            className="logo"
            onClick={handleNavigate}
            >Book&Stay.com</span>
            <div className="navItems">
                <button 
                className="navButton"
                onClick={handleLogin}>Register</button>
                <button 
                className="navButton"
                onClick={handleLogin}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
