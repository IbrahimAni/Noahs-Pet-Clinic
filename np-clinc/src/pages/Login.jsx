import React from 'react'
import { LoginCard } from '../components'
import "./styles/Login.css"

function Login({setIsLoggedIn}) {
  return (
    <div className='login-page-conatiner'>
        <LoginCard setIsLoggedIn={setIsLoggedIn}/>
    </div>
  )
}

export default Login