import React from 'react'
import RegisterNewPetCard from '../../components/dashboard/RegisterNewPetCard'
import "../styles/dashboard/RegisterNewPet.css"

function RegisterNewPet() {
  return (
    <div className='register-new-pet-container'>
        <RegisterNewPetCard />
    </div>
  )
}

export default RegisterNewPet