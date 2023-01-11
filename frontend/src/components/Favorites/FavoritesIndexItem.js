import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './Favorites.css'
import jordan1 from './jordan1-1.png'
import { MdFavorite } from 'react-icons/md'
import { useState } from 'react'



function FavoriteIndexItem({favorite}) {
    const dispatch = useDispatch()
  
    console.log(favorite)

    useEffect(()=> { 
      
    }, [dispatch])

  return (
    <li id="favorite-item" className="cart-item">
      <div className='purchase-info'>
        <div className='cart-item-image'><img src={jordan1} alt="" id="purchase-img" /></div>
        <div className="cart-item-header">{favorite.name}</div>
        <div className='cart-item-price'>${favorite.price}</div>
         <button id="cart-item-button" >< MdFavorite  id="favorite-favorite" /></button>
      </div>
    </li>
  )
}

export default FavoriteIndexItem