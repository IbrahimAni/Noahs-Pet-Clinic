import React from 'react'
import "./styles/Footer.css"
import {ReactComponent as Facebook} from "./assets/icons/social/facebook-3-logo-svgrepo-com.svg"
import {ReactComponent as Twitter} from "./assets/icons/social/twitter-3-logo-svgrepo-com.svg"
import {ReactComponent as Linkedin} from "./assets/icons/social/linkedin-icon-logo-svgrepo-com.svg"

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-items-container'>
        <div className='companys-info-footer-section'>
            <h1>Noah's</h1>
            <p>Eulan Street, 0012, Manchester</p>
            <p>City, England</p>
            <p>info@noahs.com</p>
            <p>546837832619</p>
            <div className='social-icons-container'>
                <Facebook className='social-icons-footer'/>
                <Twitter className='social-icons-footer'/>
                <Linkedin className='social-icons-footer'/>
            </div>
        </div>
        <div className='footer-services-container'>
          <div className='product-footer-container margin-footer'>
              <h1>PRODUCT</h1>
              <p>Download</p>
              <p>Location</p>
              <p>Services</p>
              <p>Address</p>
              <p>Map</p>
          </div>
          <div className='community-footer-container margin-footer'>
              <h1>COMMUNITY</h1>
              <p>Accessibilty</p>
              <p>Frontline</p>
              <p>About Us</p>
              <p>Contact</p>
              <p>Center</p>
          </div>
          <div className='about-footer-container margin-footer'>
              <h1>ABOUT</h1>
              <p>Investors</p>
              <p>Careers</p>
              <p>Founders</p>
              <p>Work</p>
              <p>Newsroom</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer