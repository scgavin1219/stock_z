import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { deleteCartItem, updateCartItem } from '../../store/cart'
import { TbTrash } from 'react-icons/tb'
import './Cart.css'
import jordan from '../../assets/jordan1-1.png'
import { CiCirclePlus} from 'react-icons/ci'
import { CiCircleMinus } from 'react-icons/ci'
import { useState } from 'react'
import { Link }  from 'react-router-dom'



function CartItem({item}) {
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(item.quantity)

    const handleDelete = (e) => { 
        e.preventDefault();
        dispatch(deleteCartItem(item.id))
    }

    useEffect(()=> { 
      
    }, [dispatch])

    const handleAdd =(e) => { 
      e.preventDefault()
      setAmount(amount + 1)
      console.log(amount)
      const payload = {
        id: item.id,
        user_id: item.userId,
        listing_id: item.listingId,
        quantity: amount + 1
      }
      dispatch(updateCartItem(payload))
    }

    const handleMinus = (e) => { 
      e.preventDefault()
      amount > 1 ? setAmount(amount - 1) : dispatch(deleteCartItem(item.id))
      const payload = { 
        id: item.id,
        user_id: item.userId,
        listing_id: item.listingId,
        quantity: amount - 1
      }
      dispatch(updateCartItem(payload))
    }
  
  return (
    <li className="cart-item">
      <div className='cart-info'>
        <Link id="favorite-link" to={`listings/${item.listingId}`}><div className='cart-item-image'><img src={jordan} alt="" id="cart-img" /></div></Link>
        <div className="cart-item-header">{item.name}</div>
        <div className='cart-item-quantity'>
          <button onClick={handleMinus} id="update-cart"><CiCircleMinus id="circle"/></button>
          {amount}
          <button onClick={handleAdd} id="update-cart"><CiCirclePlus id="circle" /></button>
        </div>
        <div className='cart-item-price'>${(item.price * amount).toFixed(2)}</div>
         <button id="cart-item-button" onClick={handleDelete}><TbTrash id="trash"/></button>
      {/* <div className="cart-item-menu">
      </div> */}
      </div>
    </li>
  )
}

export default CartItem