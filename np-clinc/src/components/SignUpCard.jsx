import React, {useState} from 'react'
import "./styles/SignUpCard.css"
import {Link} from "react-router-dom"
import {ReactComponent as Show} from "./assets/icons/eye-solid.svg"
import {ReactComponent as Hide} from "./assets/icons/eye-slash-solid.svg"

function SignUpCard() {

    const [showPassword, setShowPassword] = useState(false)

    const icon = showPassword ? <Hide className='password-icons-sign-up' onClick={() => setShowPassword(false)}/> : <Show className='password-icons-sign-up' onClick={() => setShowPassword(true)}/> ;
    const passType = showPassword ? "text" : "password";


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
                <div className='password-login-input'><input type={passType} placeholder='Password'/>{icon}</div>
                <div className='password-login-input'><input type={passType} placeholder='Confirm Password'/></div>
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