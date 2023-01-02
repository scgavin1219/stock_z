import React from 'react'
import './Splash.css'
import jordan from './AJ1.png'

function Splash() {


  return (
    <div className='splash-container'>
        <div className='jordan'> 
             <img src={jordan} alt="Air Jordan 1"/>
        </div>
    </div>
  )
}

export default Splash