import React from 'react'
import "../styles/dashboard/MainDisplay.css"
import DashBoardMenu from './DashBoardMenu'
import Appointments from './Appointments'
import Pets from './Pets'
import MedicalReport from './MedicalReport'
import Billing from './Billing'
import { useEffect, useState } from 'react'

function MainDisplay({renderPage}) {

  return (
    <div className='main-display-dasboard-container'>
        {/* {renderPage.dashboard &&  <DashBoardMenu />} */}
        <Appointments />
        {/* {renderPage.pets && <Pets />}
        {renderPage.medicalReports && <MedicalReport />}
        {renderPage.billing && <Billing />} */}
    </div>
  )
}

export default MainDisplay