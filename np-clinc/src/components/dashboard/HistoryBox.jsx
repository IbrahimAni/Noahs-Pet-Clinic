import React from 'react'
import "../styles/dashboard/HistoryBox.css"
import {ReactComponent as Check} from "../assets/icons/dashboardIcons/circle-check-solid.svg"

function HistoryBox() {
  return (
    <div className='history-box-container'>
        <div className='history-inner-box-container'>
            <p>12/10/2022</p>
            <p>Revist for Bingos Tooths</p>
            <div className='attended-status-history'>
              <Check className='check-history-box'/>
              <p>Attended</p>
            </div>
        </div>
    </div>
  )
}

export default HistoryBox