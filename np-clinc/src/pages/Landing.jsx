import React from 'react'
import { Header, NoahsClinicAbout, Services, BookWith, HowItWorks, Testimonials } from '../sections'


const Landing = () => {
  return (
    <div className='landing-page-container'>
      <Header />
      <NoahsClinicAbout />
      <Services />
      <BookWith />
      <HowItWorks />
      <Testimonials />
    </div>
  )
}

export default Landing