import React from 'react'
import Google from "./assets/icons/google-icon-logo-svgrepo-com.svg"
import Twitter from "./assets/icons/twitter-3-logo-svgrepo-com.svg"
import Facebook from "./assets/icons/facebook-3-logo-svgrepo-com.svg"
import SocialLoginIcon from './SocialLoginIcon'
import "./styles/LoginCard.css"
import {ReactComponent as ArrowLeft} from "./assets/icons/arrow-left-solid.svg"

function LoginCard() {
  return (
    <div className='login-card-container'>
        {/* <ArrowLeft className='go-back-nav' /> */}
        <div className='login-items'>
            <div className='text-version-login'>
                <h1>Login</h1>
                <p>Please enter your login details to sign in.</p>
            </div>
            <form className='login-form'>
                <input type='email' placeholder='Email Address'/>
                <input type='password' placeholder='Password'/>
                <div className='other-info-container'>
                    <div className='keep-logged-in'>
                        <input type='checkbox'/>
                        <p>Keep me logged in</p>
                    </div>
                    <div className='forget-password'>
                        <p>Forget Password ?</p>
                    </div>
                </div>
                <button>Log in</button>
            </form>
            <div className='dont-have-an-acoount'>
                <p>Don't have an account ?</p>
                <p>Sign up</p>
            </div>
            <div className='other-login-section'>
                <p>or continue with</p>
                <div className='login-social-icons'>
                    <SocialLoginIcon image={Google}/>
                    <SocialLoginIcon image={Facebook}/>
                    <SocialLoginIcon image={Twitter}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginCard