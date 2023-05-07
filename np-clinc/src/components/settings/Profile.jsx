import React from 'react'
import "../styles/settings/Profile.css"
import User from "../assets/profile-pic-chat.jpg"

function Profile() {
  return (
    <div className='profile-main-container'>
        <div className='profile-main-inner'>
            <h1>Profile</h1>
            <div className='profile-edit-main'>
                <div className='edit-avatar-section'>
                    <div className='edit-profile-pic-container'>
                        <img src={User}/>
                    </div>
                    <div className='edit-btn-profile-pic'>
                        <button className='btn-main-settings'>Upload New</button>
                        <button className='btn-main-settings delete-settings-btn'>Delete</button>
                    </div>
                </div>
                <h1 className='title-sizer cancel-profile-update'>Personal Information</h1>
                <div className='edit-personal-information-section'>
                    <div>
                        <label>First Name</label>
                        <input type='text' className='input-settings-main'/>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type='text' className='input-settings-main'/>
                    </div>
                </div>
                <h1 className='title-sizer cancel-profile-update'>Contact information</h1>
                <div className='contact-information'>
                    <div>
                        <label>Contact Phone</label>
                        <input type="text" className='input-settings-main'/>
                    </div>
                    <div>
                        <label>Email Address</label>
                        <input type="email" className='input-settings-main'/>
                    </div>
                    <div>
                        <label>Adress</label>
                        <input type="text" className='input-settings-main'/>
                    </div>
                    <div>
                        <label>City</label>
                        <input type="text" className='input-settings-main'/>
                    </div>
                </div>
                <div className='edit-submit-btn-main'>
                    <span>
                    <button className='btn-main-settings'>Cancel</button>
                    <button className='btn-main-settings'>Edit Profile</button>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile