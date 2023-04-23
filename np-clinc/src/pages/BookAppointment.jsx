import React from 'react'
import "./styles/BookAppointment.css"
import BookingPopUp from '../components/dashboard/BookingPopUp'

function BookAppointment() {
  return (
    <div className='book-appointment-page'>
        <div className='logo-container-dashboard-book'>
            <h1>Noahs.</h1>
        </div>
        <BookingPopUp />
    </div>
  )
}

export default BookAppointment