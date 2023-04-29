import React from 'react'
import { Button } from '../components'
import "./styles/BlogSubscribe.css"
import {Fade} from "react-reveal"

function BlogSubscribe() {
  return (
    <Fade bottom>
    <div className='blog-suprise-section-container'>
        <div className='section-container'>
            <h1>Subscribe To Our Blog</h1>
            <form className='subscribe-form-container'>
                <input type='email' placeholder='Enter your email adress'/>
                <button className='btn-main'>Subscribe</button>
            </form>
        </div>
    </div>
    </Fade>
  )
}

export default BlogSubscribe