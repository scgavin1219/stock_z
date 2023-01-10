import React from 'react'
import dunk from './dunk.png'
import { useState } from 'react'
import babe from './bape.png'
import trends from './trends.png'
import jshoes from './js.png'
import { GrLinkNext } from 'react-icons/gr'
import { GrLinkPrevious } from 'react-icons/gr'


function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(1)
    const slides = [dunk, babe, trends, jshoes] 

  
    return (
    <section>
        <div className='carousel' data-carousel>
            <button className='carousel-button prev' data-carousel-button="prev"><GrLinkPrevious/></button>
            <button className='carousel-button next' data-carousel-button="next"><GrLinkNext /></button>
            <img src={slides[currentIndex]} alt="" />
        </div>
    </section>
  )
}

export default Carousel



    // const buttons = document.querySelectorAll("[data-carousel-button]")
    
    // buttons.forEach(button => { 
    //     button.addEventListener("click", () => { 
    //         const offset = button.dataset.carouselButton === "next" ? 1 : -1
    //         const slides = button.closest("[data-carousel]").querySelector('[data-slides]')

    //         const activeSlide = slides.querySelector("[data-active]")
    //         let newIndex = [...slides.children].indexOf(activeSlide) + offset
    //         if (newIndex < 0) newIndex = slides.children.length - 1
    //         if (newIndex >= slides.children.length) newIndex = 0

    //         slides.children[newIndex].dataset.active = true
    //         delete activeSlide.dataset.active
    //     })
    // })