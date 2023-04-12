import React from 'react'
import ArticlesCard from '../components/ArticlesCard'
import "./styles/Articles.css"
import FirstArticle from "./assets/pexels-tranmautritam-2215599.jpg"
import SecondArticle from "./assets/pexels-norbert-kundrak-1677533.jpg"
import ThirdArticle from "./assets/pexels-muhannad-alatawi-58997.jpg"

function Articles() {
  return (
    <div className='articles-container'>
        <h1>Articles Feeds</h1>
        <div className='article-cards-section-container'>
            <ArticlesCard 
            articleTitle="Noahs Pet Store Vetenerians were on TV!"
            articleDescription="Noah's Pet Store veterinarians were recently featured on TV! Our team's expertise."
            datePosted="Jun 12 2022"
            doctorPosted="Dr. Sam Neil"
            img={FirstArticle}
            color="#ffc0c1"
            />
            <ArticlesCard 
            articleTitle="The Importance of Vacination for Your Pets"
            articleDescription="Vaccination is an important aspect of pet care that cannot be overlooked. Not only does it protect your pet."
            datePosted="Jun 17 2023"
            doctorPosted="Dr. Monroe Baeil"
            color="#ffc0c1"
            img={SecondArticle}
            />
            <ArticlesCard 
            articleTitle="Poison For Pets"
            articleDescription="In this article, we'll discuss common household items and foods that can be poisonous to pets and how to keep them out of harm's way."
            datePosted="Aug 12 2022"
            doctorPosted="Dr. Arisu Sule"
            color="#ffc0c1"
            img={ThirdArticle}
            />
        </div>
    </div>
  )
}

export default Articles