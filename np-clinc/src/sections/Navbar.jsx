import React from 'react'
import "./styles/Navbar.css"
import { Button } from '../components';
import { useState, useEffect, useRef } from 'react';
import {Link} from "react-router-dom"
import ProfilePic from "./assets/pexels-marina-gr-14428606.jpg"

const Navbar = (props) => {

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
          {
            props.loggedInStatus ? 
            (
            <ul className={`nav-ul-list ${menuOpen ? "showNav" : ""}`}>
              <li>Dashboard</li>
              <li>Home</li>
              <li>Appointments</li>
              <li>Doctors</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
            ) : (
              <ul className={`nav-ul-list ${menuOpen ? "showNav" : ""}`}>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Doctors</li>
              <li>Contact</li>
              <li>Blog</li>
              <Link to='/login'>
                <li className={`login-nav-not ${menuOpen ? "login-show" : ""}`}>Login</li>
              </Link>
            </ul>
            )
          }
        </div>
        { props.loggedInStatus ? 
        (
          <div className='profile-picture-container'>
              <img src={ProfilePic}/>
          </div>
        ) : (
          <div className='navbar-login-btn'>
            <Link to='/login'>
              <Button name="Login" btnClass="btn-primary btn-login"/>
            </Link>
          </div>
        )
        }
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