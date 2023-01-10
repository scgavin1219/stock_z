import React from 'react'
import { Link } from 'react-router-dom'
import linkedIn from './linkedin.png'
import github from './github.png'
import stockx from './StockX_logo.png'
import './Checkout.css'

function Checkout() {
  return (
    <div className='checkout'>
        <div className='thankyou'>
            <h1>Thank you for shopping with</h1>
            <img id="stockx-thanks" src={stockx} alt="stockX link" />
        </div>
        <h3>by Dylan Gavin</h3>
        <div className='thanks-box'>
            <a href="https://github.com/scgavin1219"><img id="github-thanks" src={github} alt="github link" /></a>
            <a href="https://www.linkedin.com/in/dylan-gavin-a9595150/"><img id ="linkedin-thanks" src={linkedIn} alt="linkedin link" /></a>
        </div>
        <Link to="/" id="thankslink"><h1 id="continue">Continue Shopping?</h1></Link>
    </div>
  )
}

export default Checkout