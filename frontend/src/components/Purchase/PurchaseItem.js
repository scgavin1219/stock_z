import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, deleteCartItem, removeItem } from '../../store/cart'
import { TbTrash } from 'react-icons/tb'
import './Purchase.css'
import jordan1 from './jordan1-1.png'



function PurchaseItem({item}) {
    const dispatch = useDispatch()
    // const cartItem = useSelector(state => state.listings[item])
    // const url = cartItem.photoUrls[0]

    const handleDelete = (e) => { 
        e.preventDefault();
        dispatch(deleteCartItem(item.id))
    }

    useEffect(()=> { 
      
    }, [dispatch])
  
  return (
    <li className="purchase-item">
      <div className='purchase-info'>
        <div className='purchase-item-image'><img src={jordan1} alt="" id="purchase-img" /></div>
        <div className="purchase-item-header">{item.name}</div>
        <div className='purchase-item-price'>${item.price.toFixed(2)}</div>
         <button id="purchase-item-button" onClick={handleDelete}><TbTrash id="trash" /></button>
      </div>
    </li>
  )
}

export default PurchaseItem


   // const handleAdd = (e) => { 
    //     e.preventDefaut();
    //     dispatch(addItem(item.id))
    // }