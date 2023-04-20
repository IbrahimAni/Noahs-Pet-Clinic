import React from 'react'
import "../styles/dashboard/MainDisplay.css"
import {ReactComponent as AddIcon} from "../assets/icons/dashboardIcons/circle-plus-svgrepo-com.svg"
import HistoryBox from './HistoryBox'

function MainDisplay() {
  return (
    <div className='main-display-dasboard-container'>
        <div className='main-display-inner-container appointments'>
            <div className='appointements-info-container'>
                <div className='upcoming-appointment-container'>
                    <h1>Upcoming Appointment</h1>
                    <div className='upcoming-appointments-details'>
                        <p>Jun 20 13:00</p>
                        <p>Noahs Pet Clinic</p>
                        <p>Bingo</p>
                        <p>Dr. Mukesh Ambani</p>
                        <p>Confirmed</p>
                    </div>
                    <div className='cancel-appointment-conatiner'>
                        <button>View Details</button>
                        <button className='cancel'>Cancel</button>
                    </div>
                </div>
                <div className='book-an-appointment-container'> 
                    <h1>Book An Appointment</h1>
                    <div className='add-icon-book-container'>
                        <AddIcon className='book-icon'/>
                    </div>
                    <div className='book-an-apoointment-btn'>
                        <button>Book An Appointment</button>
                    </div>
                </div>
            </div>
            <div className='appointments-history-container'>
                <div className='history-inner-container'>
                    <div className='history-text-container'>
                        <h2>History</h2>
                        <p>View details about your previous Appointments</p>
                    </div>
                    <div className='history-box-conatiners'>
                        <HistoryBox />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainDisplay