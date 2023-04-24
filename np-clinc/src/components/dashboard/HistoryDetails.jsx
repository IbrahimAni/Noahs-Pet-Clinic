import React from 'react'
import AppointmentInfoCard from './AppointmentInfoCard'
import "../styles/dashboard/HistoryDetails.css"

function HistoryDetails() {
  return (
    <div className='history-details-container'>
        <AppointmentInfoCard>
            <div className='history-added-info'>
                <div className='doctors-diagnosis-container'>
                    <p className='title-pet-details'>Diagnosis report</p>
                    <div className='diagnosis-text-box highliter'>
                        <p>Deep Cleaning of ear tunnel to avoid future infections and little redt for body to get back to previous state </p>
                    </div>
                </div>
                <div className='docotrs-prescription-section'>
                    <p className='title-pet-details'>Prescription:</p>
                    <p className='highliter'> 
                        Drug: Gabapentin
                        Dosage: 100mg
                        Route: Oral
                        Frequency: Twice daily
                        Duration: 14 days
                        Instructions: Administer Gabapentin orally to your pet twice daily for 14 days. Follow the dosage instructions carefully and make sure your pet finishes the entire course of medication. Gabapentin may cause drowsiness, so monitor your pet closely during the treatment period. If you notice any unusual side effects, contact your veterinarian immediately.
                    </p>
                </div>
            </div>
        </AppointmentInfoCard>
    </div>
  )
}

export default HistoryDetails