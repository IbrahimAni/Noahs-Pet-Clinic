import React from 'react'
import { TestimonialCard } from '../components'
import "./styles/Testimonials.css"
import TestimonialMan from "./assets/pexels-marina-gr-14428606.jpg"
import TestimonialWoman from "./assets/pexels-mateus-souza-3586798.jpg"
import {Fade} from "react-reveal"

function Testimonials() {
  return (
    <div className='testimonials-container'>
      <Fade top>
        <div className='testimonials-div-container'>
            <h1>What do our patients say ?</h1>
        </div>
      </Fade>
      <Fade bottom>
        <div className='testimonial-cards-container'>
            <TestimonialCard 
            title="Intrested and Exprreinced Vetenarians"
            text="I was so impressed with the interest and expertise of the veterinarians at this clinic. They really took the time to listen to my concerns and answer all of my questions. It's clear that they have a deep passion for animal care and a wealth of experience in the field."
            customerName="Helena Mervolina"
            customerDescription="Lexa's Mom"
            customerRating='4.8'
            customerImage={TestimonialWoman}
            />
            <div className='divider'></div>
            <TestimonialCard 
            title='Both Cheap and Friendly Staff'
            text='"I recently had to take my dog to the vet and was hesitant because of the cost. But I was pleasantly surprised by how affordable the services were at this veterinary clinic. Not only that, but the staff were incredibly friendly and made the whole experience stress-free for both me and my pet.'
            customerName='Adrian Serinali'
            customerDescription="Bobs's Dad"
            customerRating="4.6"
            customerImage={TestimonialMan}
            />
        </div>
        </Fade>
    </div>
  )
}

export default Testimonials