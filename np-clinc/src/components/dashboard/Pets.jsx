import React from 'react'
import "../styles/dashboard/Pets.css"
import {ReactComponent as Add} from "../assets/icons/dashboardIcons/circle-plus-solid.svg"

function Pets() {
  return (
    <div className='pets-container'>
        <h2>My Pets</h2>
        <div className='pet-registration-center'>
            <div className='registered-pet-container'>
                <p>Hercules</p>
                <p>Hercules</p>
            </div>
            <div className='add-new-pet-container'>
                <Add className='add-new-pet-icon'/>
                <p>Add New Pet</p>
            </div>
        </div>
        
    </div>
  )
}

export default Pets