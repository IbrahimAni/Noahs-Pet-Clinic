import React from 'react'
import { Header, NoahsClinicAbout, Services, BookWith, HowItWorks, Testimonials, OurVets, Articles, BlogSubscribe, Footer } from '../sections'
import "./styles/Landing.css"


const Landing = ({loggedIn, setLoggedIn}) => {
  return (
    <div className='landing-page-container'>
      <Header loggedInStatus={loggedIn} setLogIn={setLoggedIn}/>
      <NoahsClinicAbout loggedInStatus={loggedIn}/>
      <Services />
      <BookWith />
      <HowItWorks loggedInStatus={loggedIn}/>
      <Testimonials />
      <OurVets />
      <Articles />
      <BlogSubscribe />
      <Footer />
    </div>
  )
}

export default Landing