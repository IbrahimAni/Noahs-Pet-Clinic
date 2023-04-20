
import React from 'react'
import { NavbarDashboard, SideBar, MainDisplay } from '../../components'

function Dashboard() {
  return (
    <div className='dashboard-container'>
        <NavbarDashboard />
        <SideBar />
        <MainDisplay />
    </div>
  )
}

export default Dashboard