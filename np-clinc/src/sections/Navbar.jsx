import React from 'react'
import "./styles/Navbar.css"
import { Button } from '../components';
import { useState, useEffect, useRef } from 'react';
import {Link} from "react-router-dom"

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    function handleClick() {
      setMenuOpen(!menuOpen);
    }

    const menuClass = menuOpen ? "open" : "" ;
    const navCon = menuOpen ? "navCon" : "" ;
 
  return (
    <div className='navbar-conatiner'>
      <div className='nav-items-container'>
        <div className='company-logo'>
          <h2>Noah's.</h2>
        </div>
        <div className={`navbar-items ${navCon}`}>
            <ul className={`nav-ul-list ${menuOpen ? "showNav" : ""}`}>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Doctors</li>
              <li>Appointments</li>
              <li>Contact</li>
              <li>Blog</li>
              <Link to='/login'>
                <li className={`login-nav-not ${menuOpen ? "login-show" : ""}`}>Login</li>
              </Link>
            </ul>
        </div>
        <div className='navbar-login-btn'>
          <Link to='/login'>
            <Button name="Login" btnClass="btn-primary btn-login"/>
          </Link>
        </div>
        <div className={`nav-btn-container ${menuClass}`} 
        onClick={handleClick}
        >
          <div className='menu-btn'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar