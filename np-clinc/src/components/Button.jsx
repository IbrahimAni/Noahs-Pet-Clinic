import React from 'react'
import "./styles/Button.css"

function Button({name}) {
  return (
    <div className='btn-main'>
        {name}
    </div>
  )
}

export default Button