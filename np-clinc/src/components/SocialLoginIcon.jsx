import React from 'react'
import "./styles/SocialLoginIcon.css"

function SocialLoginIcon({image}) {
  return (
    <div className='social-login-icon'>
        <img src={image}/>
    </div>
  )
}

export default SocialLoginIcon