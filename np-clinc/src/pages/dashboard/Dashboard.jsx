
import React from 'react'
import { NavbarDashboard, SideBar, MainDisplay } from '../../components'
import { useEffect, useState } from 'react'

function Dashboard() {

    const [renderPage, setRenderPage] = useState({
        dashboard: false,
        appontments: true,
        pets: false,
        medicalReports: false,
        billing: false
    })

  return (
    <div className='dashboard-container'>
        <NavbarDashboard />
        <SideBar setRenderPage={setRenderPage} renderPage={renderPage}/>
        <MainDisplay renderPage={renderPage}/>
    </div>
  )
}

export default Dashboard