import React from 'react'
import HistoryDetails from '../../components/dashboard/HistoryDetails'
import "../styles/dashboard/AppointmentsHistoryDetails.css"
import {Navbar, Footer} from "../../sections"

function AppointmentsHistoryDetails() {
  return (
    <div className='appointment-history-details-container'>
      <Navbar />
        <div className='appointment-history-page-inner-container'>
          <HistoryDetails />
        </div>
      <Footer />
    </div>
  )
}

export default AppointmentsHistoryDetails