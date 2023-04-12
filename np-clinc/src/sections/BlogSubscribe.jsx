import React from 'react'
import { Button } from '../components'
import "./styles/BlogSubscribe.css"

function BlogSubscribe() {
  return (
    <div className='blog-suprise-section-container'>
        <div className='section-container'>
            <h1>Subscribe To Our Blog</h1>
            <form className='subscribe-form-container'>
                <input type='email' placeholder='Enter your email adress'/>
                <button className='btn-main'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default BlogSubscribe