import React from 'react'
import "../styles/dashboard/Unread.css"
import ProfilePic from "../assets/profile-pic-chat.jpg"

function Unread() {
  return (
    <div className='unread-message-card'>
        <div className='unread-profile-pic-container chat-pic'>
            <img src={ProfilePic}/>
            <p className='unread-count'>2</p>
        </div>
        <div className='unread-user-information'>
            <h3>Dr. Russel Hue</h3>
            <p>How's the dog ?</p>
        </div>
        <div className='unread-time'>
            <p>12:30</p>
        </div>
    </div>
  )
}

export default Unread