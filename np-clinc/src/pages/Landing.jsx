import React from 'react'
import { Header, NoahsClinicAbout, Services, BookWith } from '../sections'


const Landing = () => {
  return (
    <div className='landing-page-container'>
      <Header />
      <NoahsClinicAbout />
      <Services />
      <BookWith />
    </div>
  )
}

export default Landing