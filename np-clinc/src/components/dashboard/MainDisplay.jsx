import React from 'react'
import "../styles/dashboard/MainDisplay.css"
import DashBoardMenu from './DashBoardMenu'
import Appointments from './Appointments'
import Pets from './Pets'
import MedicalReport from './MedicalReport'
import Billing from './Billing'

function MainDisplay() {
  return (
    <div className='main-display-dasboard-container'>
        <DashBoardMenu />
    </div>
  )
}

export default MainDisplay