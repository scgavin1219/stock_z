import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartItem } from '../../store/cart'
import { TbTrash } from 'react-icons/tb'
import './Purchase.css'
import jordan1 from '../../assets/jordan1-1.png'
import { useState } from 'react'
import { updateCartItem } from '../../store/cart'
import { CiCirclePlus} from 'react-icons/ci'
import { CiCircleMinus } from 'react-icons/ci'



function PurchaseItem({item}) {
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(item.quantity)
    // const cartItem = useSelector(state => state.listings[item])

    // const image = listing.photoUrls.length ? <img src={listing.photoUrls[0]} alt="" /> : null
    // const url1 = listing.photoUrls[0]
    // const url2 = listing.photoUrls[1]
    // const slide = [url1, url2]

    const handleDelete = (e) => { 
        e.preventDefault();
        dispatch(deleteCartItem(item.id))
    }

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

    useEffect(()=> { 
      
    }, [dispatch])
  
  return (
    <li className="purchase-item">
      <div className='purchase-info'>
        <div className='purchase-item-image'><img src={jordan1} alt="" id="purchase-img" /></div>
        <div className="purchase-item-header">{item.name}</div>
        <div className='cart-item-quantity'>
          <button onClick={handleMinus} id="purchase-amount"><CiCircleMinus id="circle"/></button>
          <h5 id="amount">{amount}</h5>
          <button onClick={handleAdd} id="purchase-amount"><CiCirclePlus id="circle" /></button>
        </div>
        <div className='purchase-item-price'>${(item.price * amount).toFixed(2)}</div>
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