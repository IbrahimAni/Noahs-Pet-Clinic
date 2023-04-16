import React from 'react'
import "./styles/ForgotPasswordCard.css"
import {Link} from "react-router-dom"

function ForgotPasswordCard() {
  return (
    <div className='forgot-password-container'>
        <div className='forgot-password-items'>
            <div className='text-header-forgot-password'>
                <h1>Forgot Password?</h1>
                <p>Don't worry we got you covered. Enter the Email address associated with this account</p>
            </div>
            <form className='forgot-password-form'>
                <input type='email' placeholder='Email Address'/>
                <button>Submit</button>
            </form>
            <div className='go-back-sign-in'>
                <p>Go back to <Link to='/login' style={{ textDecoration: 'none', color: '#1ba0ab' }}><span>Login Page</span></Link></p>
            </div>
        </div>
    </div>
  )
}

export default ForgotPasswordCard