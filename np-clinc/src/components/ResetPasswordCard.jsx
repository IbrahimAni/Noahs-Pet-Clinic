import React from 'react'
import "./styles/ResetPasswordCard.css"

function ResetPasswordCard() {
  return (
    <div className='reset-password-card'>
        <div className='reset-password-items'>
            <div className='reset-password-text'>
                <h1>Reset Password</h1>
                <p>Enter your new password</p>
            </div>
            <form className='reset-password-form'>
                <input type='password' placeholder='Enter New Password'/>
                <input type='password' placeholder='Confirm New Password'/>
                <button>Reset Password</button>
            </form>
        </div>
    </div>
  )
}

export default ResetPasswordCard