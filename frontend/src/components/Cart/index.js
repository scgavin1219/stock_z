import CartItem from "./CartItem";
import './Cart.css'

import React from 'react'
import { useSelector } from "react-redux";

function Cart() {

    const cart = useSelector(state => state.cart)
    const listings = useSelector(state => state.listings)
    console.log(cart)
    console.log(listings)

    const cartItems = Object.values(cart).map(item => { 

        return { 
            ...parseInt(item), ...listings[parseInt(item).id] 
          
        }
       
    })

    // console.log(cartItems)

    // if (!cartItems || !cartItems.length) return ( 
    //     <div className="cart">
    //         No items in the cart. Start selecting items to purchase.
    //     </div>
    // )

    // const onSubmit = (e) => { 
    //     e.preventDefault();
    //    "Purchased the following:\n" +
    //   `${cartItems.map(item => `${item.count} of ${item.name}`).join('\n')}`
    // }

  return (
    <div className="cart">
      <ul>
        {Object.values(cart).map((item, idx) => <CartItem key={idx} item={item}/>)}
      </ul>
      <hr />
      <form >
        <button type="submit">Purchase</button>
      </form>
    </div>
  )
}

export default Cart