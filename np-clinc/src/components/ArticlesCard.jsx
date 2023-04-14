import React from 'react'
import "./styles/ArticlesCard.css"
import {ReactComponent as Clock} from "./assets/icons/clock-solid.svg"
import {ReactComponent as User} from "./assets/icons/user-regular.svg"


function ArticlesCard({img, datePosted, doctorPosted, articleTitle, articleDescription, color}) {
  return (
    <div className='article-card-container'>
        <div className='image-article-card-container'>
            <img src={img}/>
            <div className='article-details-container'>
                <div className='date-posted'>
                    <Clock fill={color} className='clock'/>
                    <p>{datePosted}</p>
                </div>
                <div className='doctor-posted'>
                    <User fill={color} className='user'/>
                    <p>{doctorPosted}</p>
                </div>
            </div>
        </div>
        <div className='article-card-text-container'>
            <h1 className='article-title'>{articleTitle}</h1>
            <p className='description'>{articleDescription}</p>
            <p className='read-more'>READ MORE  &rarr;</p>
        </div>
    </div>
  )
}

export default ArticlesCard