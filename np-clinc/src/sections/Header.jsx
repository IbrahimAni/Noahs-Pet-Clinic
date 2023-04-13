import React from 'react'
import Navbar from './Navbar'
import "./styles/Header.css"
import HeaderBanner from "./assets/pexels-anna-tarazevich-14751278.jpg"
import { Button } from '../components';

function Header() {
  return (
    <div className='header-section-container'>
        <Navbar />
        <img src={HeaderBanner}/>
        <div className='text-container-header'>
            <h1>Your Family Members Are Important To Us</h1>
            <p>We are on duty 24 hours a day for the health of your family members</p>
            <Button name="Get Started" btnClass="btn-main"/>
        </div>
    </div>
  )
}

export default Header