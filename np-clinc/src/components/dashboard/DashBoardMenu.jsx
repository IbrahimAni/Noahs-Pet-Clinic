import React from 'react'
import "../styles/dashboard/DashBoardMenu.css"
import PetPic from "../assets/pexels-muhannad-alatawi-58997.jpg"

function DashBoardMenu() {
  return (
    <div className='dashboard-menu-container'>
        <div className='gooday-text'>
            <h1>Good Morning Andrew</h1>
        </div>
        <div className='dashboard-menu-items-container'>
            <div className='dashboard-pet-information'>
                <div className='pet-image-container'>
                    <img src={PetPic}/>
                </div>
                <p>Buddy</p>
                <p>2 Years</p>
                <p>2.5ft</p>
                <p>25kg</p>
            </div>
            <div className='upcoming-appointment-countdown'>
                <h1>Countdown To Upcoming Appointment</h1>
                <h2>00:12:50:23</h2>
                <p>You have an appoinment coming up by</p>
                <p>16/04/23</p>
                <p>Dr. Mufasa</p>
            </div>
        </div>
    </div>
  )
}

export default DashBoardMenu