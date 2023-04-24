import React from 'react'
import {ReactComponent as Cancel} from "../assets/icons/dashboardIcons/xmark-solid.svg"
import "../styles/dashboard/CancelAppointment.css"

function CancelAppointment({setClickCancel}) { 

    function CloseCancelPage() {
        setClickCancel(false)
    }

  return (
    <div className='cancel-appointment-conatiner-pop-up'>
        <Cancel className='close-page-cancel' onClick={CloseCancelPage}/>
        <div className='cancel-appointment-inner-container'>
            <p>Are you Sure You want To Cancel Your Appointment ?</p>
            <div className='pay-cancelation-fee-btn-container'>
                <button>Pay Cancellation Fee</button>
            </div>
        </div>
    </div>
  )
}

export default CancelAppointment