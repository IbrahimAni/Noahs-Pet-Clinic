import React from 'react'
import {Navbar, Footer} from "../../sections"
import PetsInfo from '../../components/dashboard/PetsInfo'
import "../styles/dashboard/PetInfo.css"

function PetInfo({popUp, handlePopUp}) {
  return (
    <div className='pet-info-page-container'>
        <Navbar />
            <div className='pet-info-page-inner-container'>
                <PetsInfo popUp={popUp} handlePopUp={handlePopUp}/>
            </div>
        <Footer />
    </div>
  )
}

export default PetInfo