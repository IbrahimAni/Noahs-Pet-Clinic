import React from 'react'
import "../styles/dashboard/RegisterNewPetCard.css"

function RegisterNewPetCard() {
  return (
    <div className='register-new-pet-card-container'>
        <div className='register-new-pet-card-inner-container'>
            <h1>Register New Pet</h1>
            <form className='pet-register-form'>
                <div>
                    <label>Pet's Name</label>
                    <input type='text'/>
                </div>
                <div>
                    <label>Pet's Species</label>
                    <input type='text'/>
                </div>
                <div>
                    <label>Pet's Breed</label>
                    <input type='text'/>
                </div>
                <div>
                    <label>Pet's Age</label>
                    <input type='text'/>
                </div>
                <div>
                    <label>Pet's Gender</label>
                    <input type='text'/>
                </div>
                <div>
                    <label>Pet's Weight</label>
                    <input type='text'/>
                </div>
                <div>
                    <label>Previous medical conditions </label>
                    <input type='text'/>
                </div>
                <div>
                    <label>Pevious medications </label>
                    <input type='text'/>
                </div>
                <div>
                    <label>Previous vaccinations</label>
                    <input type='text'/>
                </div>
                <div>
                    <label>Previous injuries or surgeries</label>
                    <input type='text'/>
                </div>
                <button className='grid-col-span-2'>Register Your Pet</button>
            </form>
        </div>
    </div>
  )
}

export default RegisterNewPetCard