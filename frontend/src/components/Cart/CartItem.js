import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../../store/cart'
import './Cart.css'


function CartItem({item}) {
    const dispatch = useDispatch()
    console.log(item)
    const cartItem = useSelector(state => state.listings[item])

    console.log(cartItem)
    const handleDelete = (e) => { 
        e.preventDefaut();
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
      <div className="cart-item-header">{cartItem.name}</div>
      <div className="cart-item-menu">
        <p>1</p>
        <button className="cart-item-button" onClick={handleDelete}>Remove</button>
      </div>
    </li>
  )
}

export default CartItem