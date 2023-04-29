import React from 'react'
import { VetsCard } from '../components'
import "./styles/OurVets.css"
import FristDoctor from "./assets/pexels-rodnae-productions-6129500.jpg"
import SecondDoctor from "./assets/pexels-jrfotosgrand-fotografia-12660379.jpg"
import ThirdDoctor from "./assets/pexels-domineves-anthony-12495583.jpg"
import {Fade} from "react-reveal"

function OurVets() {
  return (
    <div className='our-vets-container'>
      <Fade top>
        <div className='our-vets-text-container'>
            <h1>Our High Qualified Veterinarians</h1>
            <p>See All &rarr;</p>
        </div>
      </Fade>
      <Fade right>
        <div className='vet-card-section-container'>
            <VetsCard 
            name="Dr. Neil Human Pascal"
            specilaization="Expert Veterinarian"
            img={FristDoctor}
            />
            <VetsCard 
            name="Dr. Patrick Samuel Neal"
            specilaization="Expert Veterinarian"
            img={SecondDoctor}
            />
            <VetsCard 
            name="Dr. Emmanuella Belivea"
            specilaization="Expert Veterinarian"
            img={ThirdDoctor}
            />
        </div>
      </Fade>
    </div>
  )
}

export default OurVets