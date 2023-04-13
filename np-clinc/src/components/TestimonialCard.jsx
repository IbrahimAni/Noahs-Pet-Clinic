import React from 'react'
import Quote from "./assets/quote-left-solid.svg"
import StarRatings from './StarRatings'
import "./styles/TestimonialCard.css"

function TestimonialCard({title, text, customerImage, customerName, customerDescription, customerRating}) {
  return (
    <div className='testimonial-card-container'>
        <div className='quote-image-container'>
            <img src={Quote}/>  
        </div>
        <h1>{title}</h1>
        <p className='customer-testimony'>{text}</p>
        <div className='custtomer-testimonial-details'>
            <div className='customer-details-image-container'>
                <img src={customerImage}/>
            </div>
            <div className='customer-details-name-container'>
                <p className='customer-name'>{customerName}</p>
                <p className='customer-decriptor'>{customerDescription}</p>
            </div>
        </div>
        <div className='customer-ratings-container'>
            <div className='stars-rating-container'>
                <StarRatings />
                <StarRatings />
                <StarRatings />
                <StarRatings />
                <StarRatings />
            </div>
            <p>{customerRating}</p>
        </div>
    </div>
  )
}

export default TestimonialCard