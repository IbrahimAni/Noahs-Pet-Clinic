import React from 'react'
import "./styles/BookAppointment.css"
import BookingPopUp from '../components/dashboard/BookingPopUp'
import {Navbar, Footer} from "../sections"

function BookAppointment({popUp, handlePopUp}) {
  return (
    <div className='book-appointment-page'>
        <Navbar />
        <div className='book-appoinment-inner-page'>
        <BookingPopUp popUp={popUp} handlePopUp={handlePopUp}/>
        </div>
        <Footer />
    </div>
  )
}

export default BookAppointment