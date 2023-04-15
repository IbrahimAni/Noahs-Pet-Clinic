import React from 'react'
import  "./styles/Button.css"

function Button({name, btnClass}) {
  return (
    <button className={`${btnClass}`}>
      {name}
    </button>
  )
}

export default Button