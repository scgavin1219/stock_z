import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './Favorites.css'
import jordan1 from './jordan1-1.png'
import { useState } from 'react'



function FavoriteIndexItem({favorite}) {
    const dispatch = useDispatch()
  
    console.log(favorite)

    useEffect(()=> { 
      
    }, [dispatch])

  return (
    <li className="cart-item">
      <div className='cart-info'>
        <div className='cart-item-image'><img src={jordan1} alt="" id="cart-img" /></div>
        <div className="cart-item-header">{favorite.name}</div>
        <div className='cart-item-price'>${favorite.price}</div>
         <button id="cart-item-button" >Placeholder</button>
      </div>
    </li>
  )
}

export default FavoriteIndexItem