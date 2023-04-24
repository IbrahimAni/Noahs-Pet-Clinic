import React, {useState, useEffect} from 'react'
import {ReactComponent as AddIcon} from "../assets/icons/dashboardIcons/circle-plus-svgrepo-com.svg"
import HistoryBox from './HistoryBox'
import "../styles/dashboard/Appointments.css"
import {Link} from "react-router-dom"
import CancelAppointment from './CancelAppointment'

function Appointments() {

    const [clickCancel, setClickCancel] = useState(false);

    function toggleCancelPage() {
        setClickCancel(true)
    }

  return (
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
                        <Link to='/appointments-details'><button>View Details</button></Link>
                        <button className='cancel' onClick={toggleCancelPage}>Cancel</button>
                    </div>
                </div>
                <div className='book-an-appointment-container'> 
                    <h1>Book An Appointment</h1>
                    <div className='add-icon-book-container'>
                        <AddIcon className='book-icon'/>
                    </div>
                    <div className='book-an-apoointment-btn'>
                        <Link to='/book-appointments'><button>Book An Appointment</button></Link>
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
            {
                clickCancel && <CancelAppointment setClickCancel={setClickCancel}/>
            }
        </div>
  )
}

export default Appointments