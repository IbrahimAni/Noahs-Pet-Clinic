import React from 'react'
import "./styles/EnterOTPCodeCard.css"

function EnterOTPCodeCard() {
  return (
    <div className='enetr-otp-card-container'>
        <div className='enter-otp-items'>
            <div className='text-container-enter-otp'>
                <h1>Enter Code</h1>
                <p>Enter the six digit verification code sent to your registerd email address</p>
            </div>
            <form className='code-entry-form'>
                <input type='text' placeholder='Enter Code'/>
                <p>Resend Code in 0:00 sec</p>
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default EnterOTPCodeCard