import React from 'react'
import "./styles/BookAppointment.css"
import BookingPopUp from '../components/dashboard/BookingPopUp'
import {Navbar, Footer} from "../sections"

function BookAppointment() {
  return (
    <div className='book-appointment-page'>
        <Navbar />
        <div className='book-appoinment-inner-page'>
        <BookingPopUp />
        </div>
        <Footer />
    </div>
  )
}

export default BookAppointment