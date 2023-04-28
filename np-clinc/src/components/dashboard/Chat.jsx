import React from 'react'
import Unread from './Unread'
import "../styles/dashboard/Chat.css"
import ProfilePic from "../assets/profile-pic-chat.jpg"

function Chat() {
  return (
    <div className='chat-page-container'>
        <div className='unread-meassages-container'>
            <p>Unread</p>
            <div className='unread-meassages-container-card'>
                <Unread />
            </div>
        </div>
        <div className='chat-box-container'>
            <div className='chat-reciver-information-container'>
                <div className='reciver-profile-pic chat-pic'>
                    <img src={ProfilePic}/>
                </div>
             <div className='reciver-other-profile'>
                <p>Converstion with Dr. Russell John</p>
             </div>
            </div>
            <div className='chat-main-display'>

                <div className='chat-input-container'>
                    <input type='text'/>
                </div>
            </div>
        </div>
        <div className='doctors-current-info'>
            <div className='doctors-basic-info'>
                <div className='doctors-basic-profile-pic chat-pic'>
                    <img src={ProfilePic}/>
                </div>
                <div className='doctors-name-ratings'>
                    <p>Dr. Russel Hue</p>
                    <div className='doctor-ratings-info'>

                    </div>
                </div>
            </div>
            <div className='doctors-other-current-info'>
                <p>Doctor Of Vetinary Medicine</p>
                <p>5+ Years Expreinces</p>
            </div>
        </div>
    </div>
  )
}

export default Chat