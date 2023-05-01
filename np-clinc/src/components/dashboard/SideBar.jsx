import React,{useState} from 'react'
import {ReactComponent as SignOutIcon} from "../assets/icons/dashboardIcons/arrow-right-from-bracket-solid.svg"
import {ReactComponent as DashboardIcon} from "../assets/icons/dashboardIcons/house-solid.svg"
import {ReactComponent as AppointmentsIcon} from "../assets/icons/dashboardIcons/file-waveform-solid.svg"
import {ReactComponent as PetsIcon} from "../assets/icons/dashboardIcons/cat-solid.svg"
import {ReactComponent as MedicalReportIcon} from "../assets/icons/dashboardIcons/file-waveform-solid.svg"
import {ReactComponent as BillingIcon} from "../assets/icons/dashboardIcons/dollar-sign-solid.svg"
import {ReactComponent as MessageIcon} from "../assets/icons/dashboardIcons/message-regular.svg"
import "../styles/dashboard/SideBar.css"
import { Link } from 'react-router-dom'

function SideBar({renderPage, setRenderPage, setIsLoggedIn}) {

    const [clciked, setClicked] = useState(false)

    function showDashboard() {
        setRenderPage(prev => ({
            dashboard: true,
            appointments: false,
            pets: false,
            medicalReports: false,
            billing: false,
            chat: false
        }))
    }

    function showAppointments() {
        setRenderPage(prev => ({
            dashboard: false,
            appointments: true,
            pets: false,
            medicalReports: false,
            billing: false,
            chat: false
        }))
    }

    function showPets() {
        setRenderPage(prev => ({
            dashboard: false,
            appointments: false,
            pets: true,
            medicalReports: false,
            billing: false,
            chat: false
        }))
    }
    function showMedicalReports() {
        setRenderPage(prev => ({
            dashboard: false,
            appointments: false,
            pets: false,
            medicalReports: true,
            billing: false,
            chat: false
        }))
    }
    function showBilling() {
        setRenderPage(prev => ({
            dashboard: false,
            appointments: false,
            pets: false,
            medicalReports: false,
            billing: true,
            chat: false
        }))
    }
    function showChat() {
        setRenderPage(prev => ({
            dashboard: false,
            appointments: false,
            pets: false,
            medicalReports: false,
            billing: false,
            chat: true
        }))
    }
    
  return (
    <div className='sidebar-container'>
        <div className='logo-container-dashboard'>
            <Link to='/' style={{textDecoration: "none", color: "black"}}>
                <h1>Noahs.</h1>
            </Link>
        </div>
        <div className='sidebar-inner-container'>
            <ul>
                <li 
                onClick={showDashboard} 
                style={renderPage.dashboard ? {color: "black"} : null}>
                <DashboardIcon className='dashboard-icons' style={renderPage.dashboard ? {fill: "black"} : null}/> Dashboard</li>
                <li 
                onClick={showAppointments} 
                style={renderPage.appointments ? {color: " black"} : null}>
                <AppointmentsIcon className='dashboard-icons' style={renderPage.appointments ? {fill: " black"} : null}/> Appointments</li>
                <li 
                onClick={showPets} 
                style={renderPage.pets ? {color: " black"} : null}>
                <PetsIcon className='dashboard-icons' style={renderPage.pets ? {fill: " black"} : null}/> Pets</li>
                <li 
                onClick={showMedicalReports} 
                style={renderPage.medicalReports ? {color: " black"} : null}>
                <MedicalReportIcon className='dashboard-icons' style={renderPage.medicalReports ? {fill: " black"} : null}/> Medical Reports</li>
                <li 
                onClick={showBilling} 
                style={renderPage.billing ? {color: " black"} : null}>
                <BillingIcon className='dashboard-icons' style={renderPage.billing ? {fill: " black"} : null}/> Billing</li>
                {/* <li 
                onClick={showChat} 
                style={renderPage.chat ? {color: " black"} : null}>
                <MessageIcon className='dashboard-icons' style={renderPage.chat ? {fill: " black"} : null}/> Chat</li> */}
            </ul>
        </div>
        <div className='sign-out-container'>
            <p onClick={() => setIsLoggedIn(false)}><SignOutIcon className='sign-out-icon-dashboard'/> Sign Out</p>
        </div>
    </div>
  )
}

export default SideBar