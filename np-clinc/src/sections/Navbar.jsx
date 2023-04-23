import React from 'react'
import "./styles/Navbar.css"
import { Button } from '../components';
import { useState, useEffect, useRef } from 'react';
import {Link} from "react-router-dom"
import ProfilePic from "./assets/pexels-marina-gr-14428606.jpg"
import {ReactComponent as Profile} from "./assets/icons/navbarIcons/user-regular.svg"
import {ReactComponent as PetIcon} from "./assets/icons/navbarIcons/dog-solid.svg"
import {ReactComponent as AppointmentIcon} from "./assets/icons/navbarIcons/calendar-check-regular.svg"
import {ReactComponent as SupportIcon} from "./assets/icons/navbarIcons/headset-solid.svg"
import {ReactComponent as SettingsIcon} from "./assets/icons/navbarIcons/gear-solid.svg"
import {ReactComponent as SignOutIcon} from "./assets/icons/navbarIcons/arrow-right-from-bracket-solid.svg" 

const Navbar = (props) => {

    const [menuOpen, setMenuOpen] = useState(false)

    function handleClick() {
      setMenuOpen(!menuOpen);
    }

    const menuClass = menuOpen ? "open" : "" ;
    const navCon = menuOpen ? "navCon" : "" ;

    function handleLogout() {
      if (props.loggedInStatus === true) {
        props.setLogIn(false);
      }
    }
 
  return (
    <div className='navbar-conatiner'>
      <div className='nav-items-container'>
        <div className='company-logo'>
          <h2>Noah's.</h2>
        </div>
        <div className='navbar-divider'>
          <div className={`navbar-items ${navCon}`}>
            {
              props.loggedInStatus ? 
              (
              <ul className={`nav-ul-list ${menuOpen ? "showNav" : ""}`}>
                <Link to='/dashboard'><li>Dashboard</li></Link>
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
                <div className='profile-container'>
                  <ul className='profile-items-container'>
                    <li><Profile className='profile-icons'/> Profile</li>
                    <li><PetIcon className='profile-icons'/> My Pets</li>
                    <li><AppointmentIcon className='profile-icons'/> My Appointments</li>
                    <li><SupportIcon className='profile-icons'/> Support</li>
                    <li><SettingsIcon className='profile-icons'/>Account Settings</li>
                    <li onClick={handleLogout}><SignOutIcon className='profile-icons'/> Sign Out</li>
                  </ul>
                </div>
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
          onClick={handleClick}>
            <div className='menu-btn'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar