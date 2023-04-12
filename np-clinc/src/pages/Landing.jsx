import React from 'react'
import { Header, NoahsClinicAbout, Services, BookWith, HowItWorks, Testimonials, OurVets, Articles, BlogSubscribe, Footer } from '../sections'
import "./styles/Landing.css"


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
      <Articles />
      <BlogSubscribe />
      <Footer />
    </div>
  )
}

export default Landing