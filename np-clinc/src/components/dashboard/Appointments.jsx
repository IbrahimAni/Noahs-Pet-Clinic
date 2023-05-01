import React, {useState, useEffect} from 'react'
import {ReactComponent as AddIcon} from "../assets/icons/dashboardIcons/circle-plus-svgrepo-com.svg"
import HistoryBox from './HistoryBox'
import "../styles/dashboard/Appointments.css"
import {Link} from "react-router-dom"
import CancelAppointment from './CancelAppointment'
import {ReactComponent as Time} from "../assets/icons/dashboardIcons/date.svg"
import {ReactComponent as Title} from "../assets/icons/dashboardIcons/title.svg" 
import {ReactComponent as Doctor} from "../assets/icons/dashboardIcons/doctor.svg"
import {ReactComponent as PetIcon} from "../assets/icons/dashboardIcons/dog.svg"  
import {ReactComponent as Check} from "../assets/icons/dashboardIcons/circle-check-solid.svg"
import {ReactComponent as Book} from "../assets/dashboardImages/undraw_booking_re_gw4j.svg"
import 'animate.css';

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
                        <div><Time className='appointment-details-icons-small'/> <p>Jun 20 13:00</p></div>
                        <div><Title className='appointment-details-icons-small'/> <p>Noahs Pet Clinic</p></div>
                        <div><PetIcon className='appointment-details-icons-small'/> <p>Bingo</p></div>
                        <div><Doctor className='appointment-details-icons-small'/> <p>Dr. Mukesh Ambani</p></div>
                        <div><Check className='appointment-details-icons-small con'/> <p>Confirmed</p></div> 
                    </div>
                    <div className='cancel-appointment-conatiner'>
                        <Link to='/appointments-details'><button>View Details</button></Link>
                        <button className='cancel' onClick={toggleCancelPage}>Cancel</button>
                    </div>
                </div>
                <div className='book-an-appointment-container'> 
                    <h1>Book An Appointment</h1>
                    <div className='add-icon-book-container'>
                        <Book className='book-icons'/>
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
                        <Link to='/history-appointments-details' style={{textDecoration:"none"}}>
                        <HistoryBox />
                        </Link>
                    </div>
                </div>
            </div>
            {
                clickCancel && <CancelAppointment setClickCancel={setClickCancel} clickCancel={clickCancel}/>
            }
        </div>
  )
}

export default Appointments