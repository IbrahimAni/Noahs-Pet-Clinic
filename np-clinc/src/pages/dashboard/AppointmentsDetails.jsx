import React from 'react'
import AppointmentInfoCard from '../../components/dashboard/AppointmentInfoCard'
import "../styles/dashboard/AppointmentsDetails.css"

function AppointmentsDetails() {
  return (
    <div className='appointment-details-page-container'>
        <AppointmentInfoCard confirmed='Confirmed'/>
    </div>
  )
}

export default AppointmentsDetails