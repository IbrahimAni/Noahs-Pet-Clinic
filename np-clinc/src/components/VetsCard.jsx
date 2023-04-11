import React from 'react'
import "./styles/VetsCard.css"

function VetsCard({img, name, specilaization}) {
  return (
    <div className='vet-card-container'>
        <div className='vet-card-img-container'>
            <img src={img}/>
        </div>
        <div className='vet-card-text'>
            <h3>{name}</h3>
            <p>{specilaization}</p>
        </div>
    </div>
  )
}

export default VetsCard