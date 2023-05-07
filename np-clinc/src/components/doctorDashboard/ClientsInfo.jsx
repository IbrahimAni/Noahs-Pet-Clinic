import React from 'react'
import "../styles/doctorDashboard/ClientsInfo.css"
import {ReactComponent as Profile} from "../assets/icons/doctorDashIcons/profile-circle.svg"
import {ReactComponent as Check} from "../assets/icons/doctorDashIcons/circle-check-solid.svg"

function ClientsInfo(props) {
  return (
    <div className='clients-info-main'>
        <div className='clients-info-main-img-contianer'>
            <Profile className="client-profile-pic"/>
        </div>
        <p>{props.name}</p>
        <div className='clients-attended-status-container'>
        <Check className="client-profile-pic filler-green"/>
        </div>
    </div>
  )
}

export default ClientsInfo