import React from 'react'
import "./styles/HowItWorksCard.css"

function HowItWorksCard({img, description}) {
  return (
    <div className='how-it-works-card-container'>
        <div className='actual-how-it-works-container'>
            <div className='image-container-how-it-works'>
                <img src={img}/>
            </div>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default HowItWorksCard