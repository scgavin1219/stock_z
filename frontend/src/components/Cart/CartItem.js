import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { deleteCartItem } from '../../store/cart'
import { TbTrash } from 'react-icons/tb'
import './Cart.css'
import jordan1 from './jordan1-1.png'


function CartItem({item}) {
    const dispatch = useDispatch()

    const handleDelete = (e) => { 
        e.preventDefault();
        dispatch(deleteCartItem(item.id))
    }

    useEffect(()=> { 
      
    }, [dispatch])
  
  return (
    <li className="cart-item">
      <div className='cart-info'>
        <div className='cart-item-image'><img src={jordan1} alt="" id="cart-img" /></div>
        <div className="cart-item-header">{item.name}</div>
        <div className='cart-item-price'>${item.price}</div>
         <button id="cart-item-button" onClick={handleDelete}><TbTrash/></button>
      {/* <div className="cart-item-menu">
      </div> */}
      </div>
    </li>
  )
}

export default CartItem