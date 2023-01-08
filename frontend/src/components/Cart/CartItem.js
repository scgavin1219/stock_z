import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '../../store/cart'


function CartItem({item}) {
    const dispatch = useDispatch()

    const handleDelete = (e) => { 
        e.preventDefaut();
        dispatch(removeItem(item.id))
    }

    const handleAdd = (e) => { 
        e.preventDefaut();
        dispatch(addItem(item.id))
    }

    useEffect(()=> { 

    }, [dispatch])

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <p>1</p>
        <button className="cart-item-button" onClick={handleClick} >
          Remove</button>
      </div>
    </li>
  )
}

export default CartItem