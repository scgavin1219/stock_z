import CartItem from "./CartItem";
import './Cart.css'

import React from 'react'
import { useSelector } from "react-redux";

function Cart() {

    const cart = useSelector(state => state.cart)
    const listing = useSelector(state => state.listing)

    const cartItems = Object.values(cart).map(item => { 
        return { 
            ...item, 
            ...listing[item.id]
        }
    })

    if (!cartItems || !cartItems.length) return ( 
        <div className="cart">
            No items in the cart. Start selecting items to purchase.
        </div>
    )

    const onSubmit = (e) => { 
        e.preventDefault();
       "Purchased the following:\n" +
      `${cartItems.map(item => `${item.count} of ${item.name}`).join('\n')}`
    }

  return (
    <div className="cart">
      <ul>
        {cartItems.map(item => <CartItem key={item.id} item={item}/>)}
      </ul>
      <hr />
      <form onSubmit={onSubmit}>
        <button type="submit">Purchase</button>
      </form>
    </div>
  )
}

export default Cart