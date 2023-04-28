import React from 'react'
import { HowItWorksCard, Button } from '../components'
import Calender from "./assets/icons/calendar-days-solid.svg"
import CheckCalender from "./assets/icons/calendar-check-solid.svg"
import Doctor from "./assets/icons/notes-medical-solid.svg"
import DogBook from "./assets/icons/shield-dog-solid.svg"
import "./styles/HowItWorks.css"
import {Link} from "react-router-dom"


function HowItWorks({loggedInStatus}) {
  return (
    <div className='how-it-works-container'>
        <div className='how-it-works-text-container'>
            <h1>How It Works</h1>
        </div>
        <div className='card-how-it-works-container'>
            <HowItWorksCard img={Calender} description='Connect With Your Calender'/>
            <HowItWorksCard img={CheckCalender} description='Find The Best TIme To Schedule'/>
            <HowItWorksCard img={Doctor} description='Get An Appointment With Our Available Doctors'/>
            <HowItWorksCard img={DogBook} description='Attend the appointment for pet health guidance'/>
        </div>
        <div className='how-it-works-btn-container'>
            <Link to={loggedInStatus ? "/dashboard" : "/login"}>
                <Button name="Book An Appointment" btnClass="btn-primary btn-no-bg"/>
            </Link>
        </div>

    </div>
  )
}

export default HowItWorks