import React from 'react'

function ServicesCard({img, service, description}) {
  return (
    <div className='services-container'>
        <div className='actual-services'>
            <img />
            <h2>{services}</h2>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ServicesCard