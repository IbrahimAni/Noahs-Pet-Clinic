import React from 'react'
import { DocMainDisplay, DocNavbar, DocSideBar } from '../../components/doctorDashboard'
import "../styles/doctorDashboard/DoctorDashboard.css"

function DoctorDashbord() {
  return (
    <div className='doctor-dashboard-main'>
        <DocSideBar />
        <DocNavbar />
        <DocMainDisplay />
    </div>
  )
}

export default DoctorDashbord