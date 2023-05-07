import React from 'react'
import "../styles/doctorDashboard/DocSideBar.css"
import {ReactComponent as Home} from "../assets/icons/doctorDashIcons/icons8-home.svg"
import {ReactComponent as Exit} from "../assets/icons/doctorDashIcons/arrow-right-from-bracket-solid.svg"
import  Report from "../assets/icons/doctorDashIcons/icons8-health-graph-50.png"
import  Stats from "../assets/icons/doctorDashIcons/icons8-combo-chart-50.png"

function DocSideBar() {
  return (
    <div className='doc-side-bar-main'>
        <div className='doc-side-bar-inner'>
            <ul>
                <li><Home className='doc-side-icons'/></li>
                <li className='doc-side-image'><img src={Report} /></li>
                <li className='doc-side-image'><img src={Report}/></li>
                <li className='doc-side-image'><img src={Stats}/></li>
            </ul>
        </div>
        <div className='doc-side-bar-exit'>
            <Exit className='doc-side-icons'/>
        </div>
    </div>
  )
}

export default DocSideBar