import React from 'react'
import "./styles/Navbar.css"
import { Button } from '../components';

const Navbar = () => {
  return (
    <div className='navbar-conatiner'>
      <div className='nav-items-container'>
        <div className='company-logo'>
          <h2>Noah's.</h2>
        </div>
        <div className='navbar-items'>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Doctors</li>
              <li>Appointments</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
            <div className='navbar-login-btn'>
                <Button name="Login" btnClass="btn-login"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar