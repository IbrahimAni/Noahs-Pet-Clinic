import React from 'react'
import {ReactComponent as SignOutIcon} from "../assets/icons/dashboardIcons/arrow-right-from-bracket-solid.svg"
import {ReactComponent as DashboardIcon} from "../assets/icons/dashboardIcons/house-solid.svg"
import {ReactComponent as AppointmentsIcon} from "../assets/icons/dashboardIcons/file-waveform-solid.svg"
import {ReactComponent as PetsIcon} from "../assets/icons/dashboardIcons/cat-solid.svg"
import {ReactComponent as MedicalReportIcon} from "../assets/icons/dashboardIcons/file-waveform-solid.svg"
import {ReactComponent as BillingIcon} from "../assets/icons/dashboardIcons/dollar-sign-solid.svg"
import "../styles/dashboard/SideBar.css"

function SideBar() {
  return (
    <div className='sidebar-container'>
        <div className='logo-container-dashboard'>
            <h1>Noahs.</h1>
        </div>
        <div className='sidebar-inner-container'>
            <ul>
                <li><DashboardIcon className='dashboard-icons'/> Dashboard</li>
                <li><AppointmentsIcon className='dashboard-icons'/> Appointments</li>
                <li><PetsIcon className='dashboard-icons'/> Pets</li>
                <li><MedicalReportIcon className='dashboard-icons'/> Medical Reports</li>
                <li><BillingIcon className='dashboard-icons'/> Billing</li>
            </ul>
        </div>
        <div className='sign-out-container'>
            <p><SignOutIcon className='sign-out-icon-dashboard'/> Sign Out</p>
        </div>
    </div>
  )
}

export default SideBar