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

    const profileRef = useRef(null);
    const navRef = useRef(null);

    const [menuOpen, setMenuOpen] = useState(false)
    const [profileOpen, setProfileOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

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

    function handleProfileShow() {
      setProfileOpen(prev => !prev)
    }

     useEffect(() => {
        const handleOutsideClick = (event) => {
          if (profileRef.current && !profileRef.current.contains(event.target)) {
            setProfileOpen(false);
          }
        }
        document.addEventListener('click', handleOutsideClick);
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
    },[]);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolled(true)
        }else {
          setScrolled(false)
        }
      }

      document.addEventListener('scroll', handleScroll);
      
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    })

    const linkStyle = {
      textDecoration: "none",
      color: "inherit"
    }
 
  return (
    <div className={`navbar-conatiner ${scrolled ? "scrolled" : ""}`}>
      <div className='nav-items-container'>
        <div className='company-logo'>
          <Link to='/' style={{textDecoration: "none", color: "black"}}>
            <h1>Noah's.</h1>
          </Link>
        </div>
        <div className='navbar-divider'>
          <div className={`navbar-items ${navCon}`}>
            {
              props.loggedInStatus ? 
              (
              <ul className={`nav-ul-list ${menuOpen ? "showNav" : ""}`}>
                <Link to='/dashboard' style={{textDecoration: 'none'}}><li>Dashboard</li></Link>
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
            <div className='profile-picture-container' onClick={handleProfileShow} ref={profileRef}>
                <img src={ProfilePic}/>
                { profileOpen &&
                  <div className={`profile-container ${profileOpen ? "animate--prof" : ""}`}>
                    <ul className='profile-items-container'>
                      <li><Profile className='profile-icons'/> Profile</li>
                      <Link to='/dashboard' style={linkStyle}><li><PetIcon className='profile-icons'/> My Pets</li></Link>
                      <Link to='/dashboard' style={linkStyle}><li><AppointmentIcon className='profile-icons'/> My Appointments</li></Link>
                      <li><SupportIcon className='profile-icons'/> Support</li>
                      <li><SettingsIcon className='profile-icons'/>Account Settings</li>
                      <li onClick={handleLogout}><SignOutIcon className='profile-icons'/> Sign Out</li>
                    </ul>
                  </div>
                }
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