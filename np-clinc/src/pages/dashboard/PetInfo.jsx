import React from 'react'
import {Navbar, Footer} from "../../sections"
import PetsInfo from '../../components/dashboard/PetsInfo'
import "../styles/dashboard/PetInfo.css"

function PetInfo() {
  return (
    <div className='pet-info-page-container'>
        <Navbar />
            <div className='pet-info-page-inner-container'>
                <PetsInfo />
            </div>
        <Footer />
    </div>
  )
}

export default PetInfo