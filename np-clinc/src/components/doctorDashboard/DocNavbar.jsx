import React from 'react'
import {ReactComponent as Notifications} from "../assets/icons/notifications.svg"
import {ReactComponent as Drop} from "../assets/icons/dropdown.svg"
import User from "../assets/profile-pic-chat.jpg"
import "../styles/doctorDashboard/DocNavbar.css"

function DocNavbar() {
  return (
    <div className='doc-navbar-main'>
        <div className='nav-inner-doctor'>
            <Notifications style={{width: "25px", height: "25px", margin: "0px 5px"}}/>
            <div className='user-profile-picture-container'>
                <img src={User}/>
            </div>
            <div className='user-name-container'>
                <p style={{fontSize: "13px"}}>Florenzi Inzignai</p>
            </div>
            <Drop style={{width: "15px", height: "15px", margin: "0px 5px"}}/>
        </div>
    </div>
  )
}

export default DocNavbar