import React from 'react'
import "./styles/SignUpCard.css"
import {Link} from "react-router-dom"

function SignUpCard() {
  return (
    <div className='sign-up-container'>
        <div className='sign-up-items'>
            <div className='sign-up-header'>
                <h1>Sign Up</h1>
                <p className='small-size'>Create your account in seconds</p>
            </div>
            <form className='sign-up-form'>
                <input type='text' placeholder='Full Name'/>
                <input type='email' placeholder='Email Address'/>
                <input type='password' placeholder='Password'/>
                <input type='password' placeholder='Confirm Password'/>
                <div className='terms-agreement'>
                    <input type='checkbox' className='set-straight'/>
                    <p className='small-size'>I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span></p>
                </div>
                <button>Create an Account</button>
            </form>
            <div className='member-already'>
                <p className='small-size'>Already a Member ? <Link to='/login' style={{ textDecoration: 'none', color: '#1ba0ab' }} ><span>Log in</span></Link></p>
            </div>
        </div>
    </div>
  )
}

export default SignUpCard