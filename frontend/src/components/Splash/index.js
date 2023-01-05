import React from 'react'
import './Splash.css'
import { Link } from 'react-router-dom'
// import jordan from './AJ1.png'
import dunk from './dunk.png'

function Splash() {


  return (
    <div className='splash-container'>
        <div className='product-type'>
          <Link to="/shoes" id="splash-links">Shoes</Link>
          <Link to="/watches" id="splash-links">Watches</Link>
          <Link to="/electronics" id="splash-links">Electronics</Link>
          <Link to="/tradingcards" id="splash-links">Trading Cards</Link>
          <Link to="/collectibles" id="splash-links">Collectibles</Link>
          <Link to="/accessories" id="splash-links">Accessories</Link> 
        </div>
        <div className='jordan'> 
             <img src={dunk} alt="Air Jordan 1"/>
        </div>
    </div>
  )
}

export default Splash