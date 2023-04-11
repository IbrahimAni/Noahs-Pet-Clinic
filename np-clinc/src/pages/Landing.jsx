import React from 'react'
import { Header, NoahsClinicAbout, Services, BookWith, HowItWorks } from '../sections'


const Landing = () => {
  return (
    <div className='landing-page-container'>
      <Header />
      <NoahsClinicAbout />
      <Services />
      <BookWith />
      <HowItWorks />
    </div>
  )
}

export default Landing