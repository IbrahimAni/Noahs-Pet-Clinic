import React from 'react'
import { NavbarDashboard, SideBar, MainDisplay } from '../../components'
import { useEffect, useState, useRef } from 'react'
import "../styles/dashboard/Dashboard.css"
import Loader from '../../components/Loader'

function Dashboard({setIsLoggedIn}) {

    const [renderPage, setRenderPage] = useState({
        dashboard: true,
        appontments: false,
        pets: false,
        medicalReports: false,
        billing: false,
        chat: false
    })

  return (
    <div className='dashboard-container'>
        <Loader />
        <NavbarDashboard />
        <SideBar setRenderPage={setRenderPage} renderPage={renderPage} setIsLoggedIn={setIsLoggedIn}/>
        <MainDisplay renderPage={renderPage}/>
    </div>
  )
}

export default Dashboard