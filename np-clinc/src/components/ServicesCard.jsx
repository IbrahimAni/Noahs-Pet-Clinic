import React from 'react'
import "./styles/ServicesCard.css"

function ServicesCard({img, services, description}) {
  return (
    <div className='services-card-container'>
        <div className='actual-services'>
            <div className='actual-services-img-container'>
                <img src={img}/>
            </div>
            <h2>{services}</h2>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ServicesCard