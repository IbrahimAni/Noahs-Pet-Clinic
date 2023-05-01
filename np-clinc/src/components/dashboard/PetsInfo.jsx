import React from 'react'
import "../styles/dashboard/PetsInfo.css"
import { useState } from 'react';
import {ReactComponent as Cancel} from "../assets/icons/dashboardIcons/xmark-solid.svg"

function PetsInfo({setClickEdit}) {

    const [isEditable, setIsEditable] = useState(false);
    const [buttonText, setButtonText] = useState('Edit')
    const [petDetails, setPetDetails] = useState({
        name: "Bunny",
        species: "German Sherperd",
        breed: "Siberia",
        age: "2",
        gender: "Male",
        weight: "12kg",
        pmc: "none",
        pm: "none",
        pv: "Covid",
        pis: "none"
    })

    function handleInputChange(event) {
        const {name, value} = event.target;
        setPetDetails({...petDetails, [name]: value})
    }

    const handleEdit = (e) => {
        e.preventDefault();
        setIsEditable(prevIsEditable => !prevIsEditable)
        if (buttonText === "Edit") {
            setButtonText("Save")
        }else {
            setButtonText("Edit")
        }
    }

  return (
    <div className='pets-info-container'>
        <div className='pet-info-inner'>
            <h1>Your Pets Information</h1>
            <form className='pet-info-edit-form'>
                <div>
                    <label>Pet's Name</label>
                    <input type='text' name='name' value={petDetails.name} readOnly={!isEditable} onChange={handleInputChange}/>
                </div>
                <div>
                    <label>Pet's Species</label>
                    <input type='text' name='species' value={petDetails.species} readOnly={!isEditable} onChange={handleInputChange}/>
                </div>
                <div>
                    <label>Pet's Breed</label>
                    <input type='text' name='breed' value={petDetails.breed} readOnly={!isEditable} onChange={handleInputChange}/>
                </div>
                <div>
                    <label>Pet's Age</label>
                    <input type='text'name='age' value={petDetails.age} readOnly={!isEditable} onChange={handleInputChange}/>
                </div>
                <div>
                    <label>Pet's Gender</label>
                    <input type='text'name='gender' value={petDetails.gender} readOnly={!isEditable} onChange={handleInputChange}/>
                </div>
                <div>
                    <label>Pet's Weight</label>
                    <input type='text'name='weight' value={petDetails.weight} readOnly={!isEditable} onChange={handleInputChange}/>
                </div>
                <div>
                    <label>Previous medical conditions </label>
                    <input type='text' name='pmc' value={petDetails.pmc} readOnly={!isEditable} onChange={handleInputChange}/>
                </div>
                <div>
                    <label>Pevious medications </label>
                    <input type='text' name='pm' value={petDetails.pm} readOnly={!isEditable} onChange={handleInputChange}/>
                </div>
                <div>
                    <label>Previous vaccinations</label>
                    <input type='text' name='pv' value={petDetails.pv} readOnly={!isEditable} onChange={handleInputChange}/>
                </div>
                <div>
                    <label>Previous injuries or surgeries</label>
                    <input type='text' name='pis' value={petDetails.pis} readOnly={!isEditable} onChange={handleInputChange}/>
                </div>
                <div className='edit-pets-details-btn'>
                    <button onClick={handleEdit}>{buttonText}</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default PetsInfo