import React from 'react'
import { Button } from '../components';
import DoctorImage from "./assets/pexels-antoni-shkraba-5215024.jpg"
import "./styles/BookWith.css"

function BookWith() {
  return (
    <div className='book-with-container'>
        <div className='image-container-book-now'>
            <img src={DoctorImage}/>
        </div>
        <div className='book-with-text-container'>
            <div className='text-conatiner-book'>
                <h1>The Best Veterinarians In All Branches</h1>
                <p>
                    If you're looking to book an appointment with the best veterinarians in all branches, then look no further than our pet clinic. Our team of highly trained and experienced veterinarians is dedicated to providing top-quality care for your pets. Whether your furry friend is in need of a routine check-up, treatment for a minor illness, or emergency services, our vets are here to help. We understand that pets are an important part of your family, which is why we strive to create a welcoming and compassionate environment for both you and your furry friends. So, book an appointment with us today and rest assured that your pets are in good hands.
                </p>
                <div className='book-with-btn-container'>
                    <Button name='Contact Us' btnClass="btn-primary btn-no-bg"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookWith