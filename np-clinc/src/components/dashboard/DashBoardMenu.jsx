import React, {useState} from 'react'
import "../styles/dashboard/DashBoardMenu.css"
import PetPic from "../assets/pexels-muhannad-alatawi-58997.jpg"
import {ReactComponent as Time} from "../assets/icons/dashboardIcons/calendar-check-solid.svg"
import {Link} from "react-router-dom"

function DashBoardMenu() {

    const [days, setDays] = useState('')
    const [min, setMin] = useState('')
    const [hour, setHour] = useState('')
    const [secs, setSecs] = useState('')

    var countDownDate = new Date("APR 30, 2023 23:59:59").getTime();

    const myFunc = setInterval(function() {
        var now = new Date().getTime();
        var timeleft = countDownDate - now;
        setDays(Math.floor(timeleft / (1000 * 60 * 60 * 24))) 
        setHour(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))) 
        setMin(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))) 
        setSecs(Math.floor((timeleft % (1000 * 60)) / 1000)) 
    },1000)

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
                            <p>{days}</p>
                        </div>
                        <p className='description-'>DAYS</p>
                    </div>
                    <div className='countdown-hours con'>
                        <div className='rectangle'>
                            <p>{hour}</p>
                        </div>
                        <p className='description-'>HOURS</p>
                    </div>
                    <div className='countdown-minutes con'>
                        <div className='rectangle'>
                            <p>{min}</p>
                        </div>
                        <p className='description-'>MINUTES</p>  
                    </div>
                    <div className='countdown-seconds con'>
                        <div className='rectangle'>
                            <p>{secs}</p>
                        </div>
                        <p className='description-'>SECONDS</p>
                    </div>
                </div>
                <div className='additional-appointment-info'>
                    <Link to='/'>
                    <button>Go to Appointment</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashBoardMenu