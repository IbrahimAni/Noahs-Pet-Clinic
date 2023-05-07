import React, {useState, useEffect} from 'react'
import "../styles/dashboard/BookingPopUp.css"
import SucessMessage from './SucessMessage'

function BookingPopUp(props) {

  return (
    <div className='booking-pop-up'>
        {   props.popUp && 
            <SucessMessage message='Your Appointment has been Sucessfully Booked. You Can Proceed to Make Payment'/>}
        <div className='booking-inner-pop-up'>
            <h1>Appointment Booking</h1>
            <div className='booking-user-info'>
                <p>FullName</p>
                <p>Phone Number</p>
                <p>neiufnnefiefie@gmail.com </p>
                <p>No 90 inefnfi street baxford</p>
            </div>
            <div className='booking-pet-info'>
                <select>
                    <option>Select Pet Info</option>
                    <option>Bingo</option>
                    <option>Buddy</option>
                    <option>Mannoy</option>
                </select>
            </div>
            <form className='booking-form'>
                <label>Appointment Title</label>
                <input type='text' placeholder='Appointment Title' className='appointment-title'/>
                <label>Problem Description</label>
                <textarea className='problem-description'/>
                <label>Choose Appointment Date:</label>
                <input type='date' className='date-book'/>          
                <div className='book-btn-container'>
                    <button onClick={props.handlePopUp}>Book Appointment</button>
                </div>
            </form>
            <div className='terms-and-conditiions'>
                <p>Terms & Guidelines</p>
                <ol>
                    <li>You will be notified 2hrs pior your appointment time for your arrival confirmation</li>
                    <li>In case you want to reschedule your appointment after completion of booking then you can reschedule it to the same day or other days </li>
                    <li>In Case you didn't confirm your arrival, then your appointment will be canceled</li>
                </ol>
            </div>
            <div className='proceed-to-pay'>
                 <button>Proceed To Pay</button>
            </div>
        </div>
    </div>
  )
}

export default BookingPopUp