import React, { useEffect } from 'react'
import './Splash.css'
import { Link } from 'react-router-dom'
// import jordan from './AJ1.png'
import dunk from '../../assets/dunk.png'
import babe from '../../assets/bape.png'
import trends from '../../assets/trends.png'
import jshoes from '../../assets/js.png'
// import Carousel from '../../assets/Carousel'
import { useState } from 'react'

function Splash() {
  const slide = [babe, trends, jshoes] 
  const [currentIdx, setCurrentIdx] = useState(0)

  useEffect(()=> { 
    const splashInterval = setInterval(()=> { 
      if (currentIdx < slide.length - 1) { 
        setCurrentIdx(currentIdx + 1)
      } else { 
        setCurrentIdx(0)
      }
    }, 4000) 
    return () => clearInterval(splashInterval)
  }, [currentIdx])

  return (
    <div className='splash-container'>
        <div className='product-type'>
          <Link to="/sneakers" id="splash-links">Shoes</Link>
          <Link to="/watches" id="splash-links">Watches</Link>
          <Link to="/electronics" id="splash-links">Electronics</Link>
          <Link to="/tradingcards" id="splash-links">Trading Cards</Link>
          <Link to="/tradingcards" id="splash-links">Collectibles</Link>
          {/* <Link to="/watches" id="splash-links">Accessories</Link>  */}
        </div>
        <div className='jordan'> 
            
            {/* <img src={dunk} alt="Air Jordan 1"/> */}
        </div>
        <div className='splash-img'>
          {/* <Carousel /> */}
          <img src={slide[currentIdx]} id="splash-img" />
        </div>
    </div>
  )
}

export default Splash