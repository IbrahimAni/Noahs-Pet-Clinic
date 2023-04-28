import React from 'react'
import Google from "./assets/icons/google-icon-logo-svgrepo-com.svg"
import Twitter from "./assets/icons/twitter-3-logo-svgrepo-com.svg"
import Facebook from "./assets/icons/facebook-3-logo-svgrepo-com.svg"
import SocialLoginIcon from './SocialLoginIcon'
import "./styles/LoginCard.css"
import {ReactComponent as ArrowLeft} from "./assets/icons/arrow-left-solid.svg"
import {Link, useLocation, useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import {ReactComponent as Show} from "./assets/icons/eye-solid.svg"
import {ReactComponent as Hide} from "./assets/icons/eye-slash-solid.svg"

function LoginCard(props) {

    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false)

    function handleLogin(event) {
        event.preventDefault()
        if (email === "dummy@example.com" && password === "password") {
            props.setIsLoggedIn(true)
        }
        const { from } = location.state || { from: { pathname: "/" } };
        navigate(from);
    }

    const icon = showPassword ? <Hide className='password-icons' onClick={() => setShowPassword(false)}/> : <Show className='password-icons' onClick={() => setShowPassword(true)}/> ;
    const passType = showPassword ? "text" : "password";

  return (
    <div className='login-card-container'>
        {/* <ArrowLeft className='go-back-nav' /> */}
        <div className='login-items'>
            <div className='text-version-login'>
                <h1>Login</h1>
                <p>Please enter your login details to sign in.</p>
            </div>
            <form className='login-form'>
                    <input 
                    type='email' 
                    placeholder='Email Address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className='password-login-input'>
                    <input 
                    type={passType} 
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                    {icon}
                </div>
                <div className='other-info-container'>
                    <div className='keep-logged-in'>
                        <input type='checkbox'/>
                        <p>Keep me logged in</p>
                    </div>
                    <div className='forget-password'>
                        <Link to='/forgot-password' style={{ textDecoration: 'none', color: '#1ba0ab' }}>
                            <p>Forget Password ?</p>
                        </Link>
                    </div>
                </div>
                <button onClick={handleLogin}>Log in</button>
            </form>
            <div className='dont-have-an-acoount'>
                <p>Don't have an account ?</p>
                <Link to='/register' style={{ textDecoration: 'none', color: '#1ba0ab' }}>
                    <p>Sign up</p>
                </Link>
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