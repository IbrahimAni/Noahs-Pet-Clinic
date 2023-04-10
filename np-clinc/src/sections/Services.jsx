import React from 'react'
import { ServicesCard } from '../components'
import "./styles/Services.css"
import PawSvg from "./assets/icons/paw-solid.svg"
import Hospital from "./assets/icons/house-chimney-medical-solid.svg"
import Bandage from "./assets/icons/bandage-solid.svg"
import Ambulance from "./assets/icons/truck-medical-solid.svg"

function Services() {
  return (
    <div className='services-container'>
        <div className='our-services-container'>
            <p>OUR SERVICES</p>
            <h1>All Vetinary Services</h1>
            <p>Following are the services we provide</p>
        </div>
        <div className='cards-container'>
            <ServicesCard 
            img={PawSvg}
            services='General Treatment'
            description=" Our veterinarians provide a variety of general treatments to help keep your pets healthy. From routine check-ups and vaccinations to medication for minor illnesses, we're here to help your pets feel their best."
            className="services-card-img"/>
            <ServicesCard 
            img={Hospital}
            services='Health Checkup'
            description="Regular health checkups are essential to maintain your pet's overall wellbeing. Our veterinarians conduct comprehensive health checkups to ensure your pets are healthy and catch any potential health issues early on."
            className="services-card-img"/>
            <ServicesCard
            img={Bandage}
            services='Wounds And Diseases'
            description="If your pet is injured or becomes ill, our veterinarians are here to provide the medical care they need. We offer a variety of treatments for wounds and diseases, including medication, surgery, and other procedures as needed."
            className="services-card-img"/>
            <ServicesCard 
            img={Ambulance}
            services='Ambulances Services'
            description="In case of emergencies, we provide ambulance services to transport your pets safely to our clinic. Our ambulance service is equipped with all necessary equipment and medications to provide emergency care en route to the clinic."
            className="services-card-img"/>
        </div>
    </div>
  )
}

export default Services