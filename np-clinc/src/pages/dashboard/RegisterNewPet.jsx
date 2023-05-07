import React from 'react'
import RegisterNewPetCard from '../../components/dashboard/RegisterNewPetCard'
import "../styles/dashboard/RegisterNewPet.css"
import {Navbar, Footer} from "../../sections"

function RegisterNewPet({popUp, handlePopUp}) {
  return (
    <div className='register-new-pet-container'>
        <Navbar />
        <div className='register-new-pet-inner-container'>
          <RegisterNewPetCard popUp={popUp} handlePopUp={handlePopUp}/>
        </div>
        <Footer />
    </div>
  )
}

export default RegisterNewPet