import React from 'react'
import Star from "./assets/star-solid.svg"
import StarHalf from "./assets/star-half-stroke-solid.svg"
import "./styles/StarRatings.css"

function StarRatings() {
  return (
    <div className='stars-container'>
        <img src={Star}/>
    </div>
  )
}

export default StarRatings