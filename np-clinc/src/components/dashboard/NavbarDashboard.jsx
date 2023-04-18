import React from 'react'
import {ReactComponent as NotificationIcon} from "../assets/icons/dashboardIcons/bell-regular.svg"
import {ReactComponent as MessageIcon} from "../assets/icons/dashboardIcons/message-regular.svg"
import ProfilePic from "../assets/pexels-marina-gr-14428606.jpg"
import "../styles/dashboard/NavbarDashboard.css"

function NavbarDashboard() {
  return (
    <div className='navbar-dashboard-container'>
        <div className='search-container-navbar'>
            <input type='text' placeholder='Search something...'></input>
        </div>
        <div className='user-info-container'>
            <div className='items-container-user'>
                <NotificationIcon className='navbar-icons spacer'/>
                <MessageIcon className='navbar-icons spacer'/>
                <div className='dashboard-profile-pic-container spacer'>
                    <img src={ProfilePic}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavbarDashboard