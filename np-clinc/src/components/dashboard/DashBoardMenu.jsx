import React from 'react'
import "../styles/dashboard/DashBoardMenu.css"
import PetPic from "../assets/pexels-muhannad-alatawi-58997.jpg"
import {ReactComponent as Time} from "../assets/icons/dashboardIcons/calendar-check-solid.svg"

function DashBoardMenu() {
  return (
    <div className='dashboard-menu-container'>
        <div className='gooday-text'>
            <h1>Good Morning Andrew</h1>
        </div>
        <div className='dashboard-menu-items-container'>
            <div className='upcoming-appointment-countdown'>
                <h1>You have an Appointment Coming up in</h1>
                 <div className='time-container'>
                    <div className='countdown-days con'>
                        <div className='rectangle'>
                            <p>4</p>
                        </div>
                        <p className='description'>DAYS</p>
                    </div>
                    <div className='countdown-hours con'>
                        <div className='rectangle'>
                            <p>3</p>
                        </div>
                        <p className='description'>HOURS</p>
                    </div>
                    <div className='countdown-minutes con'>
                        <div className='rectangle'>
                            <p>5</p>
                        </div>
                        <p className='description'>MINUTES</p>  
                    </div>
                    <div className='countdown-seconds con'>
                        <div className='rectangle'>
                            <p>55</p>
                        </div>
                        <p className='description'>SECONDS</p>
                    </div>
                </div>
                <div className='additional-appointment-info'>
                    <button>Go to Appointment</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashBoardMenu