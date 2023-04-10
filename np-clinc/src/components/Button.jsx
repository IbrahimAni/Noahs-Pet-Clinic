import React from 'react'
import "./styles/Button.css"

function Button({name}) {
  return (
    <button className='btn-main btn-header btn-about'>
      {name}
    </button>
  )
}

export default Button