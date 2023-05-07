import React, { useEffect, useState } from 'react'
import "../styles/dashboard/SucessMessage.css"

function SucessMessage(props) {

    const [fade, setFade] = useState("")

    useEffect (() => {
        setTimeout(() => {
            setFade('animate__zoomOut')
        }, 5000)
    }, [])

  return (
    <div className={`sucess-message-container animate__animated animate__zoomIn ${fade}`} >
        {props.message}
    </div>
  )
}

export default SucessMessage