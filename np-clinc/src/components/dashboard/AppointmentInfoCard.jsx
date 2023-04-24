import React from 'react'
import "../styles/dashboard/AppointmentInfoCard.css"
import {ReactComponent as Confirmed} from "../assets/icons/dashboardIcons/circle-check-solid.svg"
import {ReactComponent as Loading} from "../assets/icons/dashboardIcons/hourglass-half-solid.svg"
import DoctorProfilePic from "../assets/dashboardImages/pexels-mateus-souza-3586798.jpg"

function AppointmentInfoCard(props) {
  return (
    <div className='appointment-info-container-card'>
        <div className='appointment-inner-container-details'>
            <h2>Checking Out Bunnys Paws for Infections</h2>
            <p className='time-selected'>Tuesday 16th March 2023 13:00 - 14:00</p>
            <div className='main-basic-details'>
                <div className='main-basic-details-one'>
                    <p>George Hemmingway</p>
                    <p><span>status:</span> Not Yet Attended</p>
                </div>
                <div className='main-basic-details-two'>
                    <p><span>Patient id:</span> 0GARTY5</p>
                    <p><span>Contact No:</span> 97526815167</p>
                </div>
            </div>
            <div className='apointment-status'>
                <div><Confirmed className='status-icons color-green'/> <p>{props.confirmed}</p></div>
                <div><Loading className='status-icons'/><p>Yet to be Confirmed</p></div>
            </div>
            <div className='pet-appoinment-details'>
                <div className='pet-name-info'>
                    <p className='title-pet-details'>Pet Name</p>
                    <p>Bunny</p>
                </div>
                <div className='pet-breed-info'>
                    <p className='title-pet-details'>Breed</p>
                    <p>German Shreperd</p>
                </div>
            </div>
            <div className='problem-description-apointment-details'>
                <p>Problem Desciption</p>
                <p>Itching Pores in thge skin of bunnys skin</p>
            </div>
            <div className='doctor-assigned-section-details'>
                <p>Doctor Assigned</p>
                <div className='doctor-details-info'>
                    <div className='image-container-doctor-details'>
                        <img src={DoctorProfilePic}/>
                    </div>
                    <p>Dr. Mukesh Amabani</p>
                </div>
            </div>
            {
                props.children
            }
        </div>
    </div>
  )
}

export default AppointmentInfoCard