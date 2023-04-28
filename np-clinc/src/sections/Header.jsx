import React from 'react'
import Navbar from './Navbar'
import "./styles/Header.css"
import HeaderBanner from "./assets/pexels-anna-tarazevich-14751278.jpg"
import { Button } from '../components';
import {Link} from "react-router-dom"
import HeaderIlus from "./assets/header-ilustration.png"

function Header({loggedInStatus, setLogIn}) {
  return (
    <div className='header-section-container'>
        <Navbar loggedInStatus={loggedInStatus} setLogIn={setLogIn}/>
        {/* <img src={HeaderBanner}/> */}
        <div className='header-ilustration-container'>
            <img src={HeaderIlus}/>
        </div>
        <div className='text-container-header'>
            <h1>Your Family Members Are Important To Us</h1>
            <p>We are on duty 24 hours a day for the health of your family members</p>
            <div className='btn-container-header'>
              <Link to={loggedInStatus ? "/dashboard" : "/login"}>
                <Button name="Book an Appointment" btnClass="btn-primary"/>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Header 