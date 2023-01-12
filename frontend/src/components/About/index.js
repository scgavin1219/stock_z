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
            <img id="spiderman" src={slides[currentIdx]} alt="spiderman" />
        </div>
        <div className='about-bio'>
            <div className='about-title'>
                <h1> Dylan Gavin</h1>
            </div>
            <p>I am a former teacher turned Software Engineer. 
                Thank you so much for visiting my StockX clone. 
                As a teacher I would often dress
                up for my students on Halloween as some of my favorite
                superheroes. I knew my Miles Morales costume would not 
                be complete without his signature shoes. This led
                me to StockX and is the inspiration behind this project. 
            </p>
            <p>
                If you have any questions about the project I would love
                to connect, my socials are on the bottom of the page.  This
                 project is built on a Rails backend and a React frontend. 
                My other interests....
                IDK THIS IS ALL HOT GARBAGE AND I'M TIRED
            </p>
        </div>
    
    </div>
  )
}

export default About