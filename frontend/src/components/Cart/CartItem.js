import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../../store/cart'
import { TbTrash } from 'react-icons/tb'
import './Cart.css'


function CartItem({item}) {
    const dispatch = useDispatch()
    const cartItem = useSelector(state => state.listings[item])
    const url = cartItem.photoUrls[0]

    console.log(cartItem)
    const handleDelete = (e) => { 
        e.preventDefault();
        dispatch(removeItem(cartItem.id))
    }

    // const handleAdd = (e) => { 
    //     e.preventDefaut();
    //     dispatch(addItem(item.id))
    // }

    useEffect(()=> { 
      
    }, [dispatch])
  
  return (
    <li className="cart-item">
      <div className='cart-info'>
        <div className='cart-item-image'><img src={url} alt="" id="cart-img" /></div>
        <div className="cart-item-header">{cartItem.name}</div>
        <div className='cart-item-price'>${cartItem.price}</div>
         <button id="cart-item-button" onClick={handleDelete}><TbTrash/></button>
      {/* <div className="cart-item-menu">
      </div> */}
      </div>
    </li>
  )
}

export default CartItem