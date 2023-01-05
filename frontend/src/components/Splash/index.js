import React from 'react'
import './Splash.css'
import { Link } from 'react-router-dom'
import jordan from './AJ1.png'
import dunk from './dunk.png'

function Splash() {


  return (
    <div className='splash-container'>
        <div className='product-type'>
          <h5>Shoes</h5>
          <h5>Watches</h5>
          <h5>Electronics</h5>
          <Link to="/tradingcards"><h5>Trading Cards</h5></Link>
          <h5>Collectibles</h5>
          <h5>Accessories</h5> 
        </div>
        <div className='jordan'> 
             <img src={dunk} alt="Air Jordan 1"/>
        </div>
        {/* <div className='products'>
          <h1>All of the products will go here</h1>
          <h2>Not sure, but maybe sort by category</h2>
        </div> */}
    </div>
  )
}

export default Splash