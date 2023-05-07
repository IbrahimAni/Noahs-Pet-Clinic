import React from 'react'
import "../styles/settings/Password.css"

function Password() {
  return (
    <div className='password-settings-main-container'>
        <h1>Change Password</h1>
        <div className='password-settings-inner-container'>
            <div className='password-input-setting'>
                <div>
                    <label>Password</label>
                    <input type='password'/>
                </div>
                <div>
                    <label>New Password</label>
                    <input type='password'/>
                </div>
                <div>
                    <label>Confirm New Password</label>
                    <input type='password'/>
                </div>
            </div>
            <div className='password-change-btn-settings'>
                <button className='btn-main-settings'>Change Password</button>
            </div>
        </div>
    </div>
  )
}

export default Password