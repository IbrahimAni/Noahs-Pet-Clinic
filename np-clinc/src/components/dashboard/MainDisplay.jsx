import React from 'react'
import "../styles/dashboard/MainDisplay.css"
import DashBoardMenu from './DashBoardMenu'
import Appointments from './Appointments'
import Pets from './Pets'
import MedicalReport from './MedicalReport'
import Billing from './Billing'
import Chat from './Chat'
import { useEffect, useState } from 'react'

function MainDisplay({renderPage}) {

  return (
    <div className='main-display-dasboard-container'>
        {renderPage.dashboard &&  <DashBoardMenu />}
        {renderPage.appointments && <Appointments />}
        {renderPage.pets && <Pets />}
        {renderPage.medicalReports && <MedicalReport />}
        {renderPage.billing && <Billing />}
        {renderPage.chat && <Chat />}
    </div>
  )
}

export default MainDisplay