import React from 'react'
import "../styles/dashboard/MedicalReport.css"

function MedicalReport() {
  return (
    <div className='medical-report-container'>
        <h2>Generate Yours Pets Medical Report</h2>
        <form className='medical-form-generation'>
            <div className='date-select'>
                <p>Select Your Pet</p>
                <select className='medical-form-generation-pet'>
                    <option>Select Pet</option>
                    <option value='bingo'>Bingo</option>
                    <option value='bingo2'>Bingo2</option>
                    <option value='bingo3'>Bingo3</option>
                </select>
            </div>
            <div className='appointment-select'>
                <p>Select The Date of Appointment</p>
                <select className='medication-form-generation-appointment'>
                    <option>Select Appointment </option>
                    <option value='all-time'>All Time</option>
                    <option>Jun 20 2023 16:00</option>
                    <option>Aug 23 2023 13:00</option>
                </select>
            </div>
            <button>Generate Report</button>
        </form>
    </div>
  )
}

export default MedicalReport