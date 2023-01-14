import React from 'react'
import spidey1 from '../../assets/spidey3.png'
import spidey2 from '../../assets/spidey4.png'
import { useState, useEffect } from 'react'
import './About.css'

function About() {
    const slides = [spidey1, spidey2]
    const [currentIdx, setCurrentIdx] = useState(0)

    useEffect(()=> { 
    const splashInterval = setInterval(()=> { 
      if (currentIdx < slides.length - 1) { 
        setCurrentIdx(currentIdx + 1)
      } else { 
        setCurrentIdx(0)
      }
    }, 20000) 
    return () => clearInterval(splashInterval)
  }, [currentIdx])


  return (
    <div className="about-container">
        <div className='about-picture'>
            <img id="spiderman" src={spidey2} alt="spiderman" />
            <img id="spiderman" src={spidey1} alt="spiderman" />
        </div>
        <div className='about-bio'>
            <div className='about-title'>
                <h1> Dylan Gavin</h1>
            </div>
            <p>My name is Dylan Gavin and I am a former teacher turned Software Engineer. 
                Thank you so much for visiting my StockX clone. 
                As a teacher I would often dress
                up for my students on Halloween as some of my favorite
                superheroes. I knew my Miles Morales costume would not 
                be complete without his signature shoes. This led
                me to StockX and is the inspiration behind this project. 
            </p>
            <p>
                My stockX clone is built with a front end that is coded in JavaScript.
                I used React and Redux to render components and to manage state. I used 
                a Ruby on Rails backend and a PostgreSQL database. This websited has three
                full CRUD features. Users that are signed in are able to create, update, and
                delete both reviews and their shopping carts. Users are also able to add
                products to their favorites and any user can search by name, category, or 
                description.
                </p> 
                <p> 
                If you have any questions about the project I would love
                to connect, my socials are on the bottom of the page. 
            </p>
        </div>
    
    </div>
  )
}

export default About