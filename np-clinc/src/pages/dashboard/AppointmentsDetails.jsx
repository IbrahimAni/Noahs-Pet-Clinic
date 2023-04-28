import React from 'react'
import AppointmentInfoCard from '../../components/dashboard/AppointmentInfoCard'
import "../styles/dashboard/AppointmentsDetails.css"
import {Navbar, Footer} from "../../sections"

function AppointmentsDetails() {
  return (
    <div className='appointment-details-page-container'>
      <Navbar />
        <div className='appointment-details-page-inner-container'>
            <AppointmentInfoCard confirmed='Confirmed'/>
        </div>
        
      <Footer />
    </div>
  )
}

export default AppointmentsDetails