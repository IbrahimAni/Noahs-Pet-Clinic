import React from 'react'
import { Header, NoahsClinicAbout, Services, BookWith, HowItWorks, Testimonials, OurVets } from '../sections'


const Landing = () => {
  return (
    <div className='landing-page-container'>
      <Header />
      <NoahsClinicAbout />
      <Services />
      <BookWith />
      <HowItWorks />
      <Testimonials />
      <OurVets />
    </div>
  )
}

export default Landing