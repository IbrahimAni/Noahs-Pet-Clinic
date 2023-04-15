import React from 'react'
import { Button } from '../components';
import CompanyPic from "./assets/pexels-ensaio-da-cegueira-15215418.jpg"
import "./styles/NoahsClinicAbout.css"

function NoahsClinicAbout() {
  return (
    <div className='about-the-clinic-container'>
        <div className='image-container-noahs-clinic'>
            <div className='image-backdrop'></div>
            <img src={CompanyPic}/>
        </div>
        <div className='about-container-noahs-clinic'>
            <div className='container-for-about'>
                <h4>WELCOME TO</h4>
                <h2>Noahs Pets Clinic</h2>
                <p>
                    Welcome to Noah's Pet Clinic, where we provide high-quality veterinary care for pets of all kinds. Our team of experienced and compassionate veterinarians and staff are committed to providing the best possible care for your furry family members.
                    At Noah's Pet Clinic, we offer a wide range of services to keep your pets healthy and happy. From routine wellness exams and vaccinations to surgery and grooming, we have everything your pet needs to stay healthy and comfortable.
                </p>
                <div className='btn-container-about'>
                <Button name="Book An Appointment" btnClass='btn-primary btn-no-bg'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NoahsClinicAbout