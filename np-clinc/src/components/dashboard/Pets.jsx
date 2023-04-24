import React from 'react'
import "../styles/dashboard/Pets.css"
import {ReactComponent as Add} from "../assets/icons/dashboardIcons/circle-plus-solid.svg"
import {Link } from "react-router-dom"

function Pets() {
  return (
    <div className='pets-container'>
        <h2>My Pets</h2>
        <div className='pet-registration-center'>
            <div className='registered-pet-container'>
                <p>Hercules</p>
                <p>Hercules</p>
            </div>
            <Link to='/register-pet' style={{textDecoration: 'none', color: "black"}}>
            <div className='add-new-pet-container'>
                <Add className='add-new-pet-icon'/>
                <p>Add New Pet</p>
            </div>
            </Link>
        </div>
        
    </div>
  )
}

export default Pets