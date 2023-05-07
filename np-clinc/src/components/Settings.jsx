import React from 'react'
import "./styles/Settings.css"
import {ReactComponent as Notifications} from "./assets/icons/notifications.svg"
import {ReactComponent as Drop} from "./assets/icons/dropdown.svg"
import User from "./assets/profile-pic-chat.jpg"
import Profile from './settings/Profile'
import Password from './settings/Password'

function Settings() {
  return (
    <div className='settings--main-container'>
        <div className='settings-inner-container'>
            <div className='nav-settingss--main'>
                    <h1>Noahs.</h1>
                    <div className='settings-nav-items'>
                        <ul>
                            <li>Profile</li>
                            <li>Password</li>
                            <li>Support</li>
                        </ul>
                    </div>
            </div>
            <div className='setting-other-sections'>
                <div className='settings-nav-section'>
                    <div className='setting-nav-inner'>
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
               
                <div className='main-display-settings'>
                    <Password />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Settings