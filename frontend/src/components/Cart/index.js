import CartItem from "./CartItem";
import './Cart.css'
import { AiOutlineShoppingCart} from 'react-icons/ai'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { icons } from "react-icons/lib";
import { useState } from "react";

function Cart() {
    const [showCart, setShowCart] = useState(false)
    const cart = useSelector(state => state.cart)
    const listings = useSelector(state => state.listings)
    const dispatch = useDispatch()

    const openCart = () => { 
      if (showCart) return;
      setShowCart(true)
    }

    // useEffect(() => { 
    //   if (!showCart) return;

    //   const closeCart = () => { 
    //     setShowCart(false)
    //   }
    //   document.addEventListener('click', closeCart);
    //   return () => document.removeEventListener("click", closeCart)
    // }, [showCart])
   
  const toggleCart = () => { 
    showCart ? setShowCart(false) : setShowCart(true)
  }

    const cartItems = Object.values(cart).map(item => { 
        return { 
            ...parseInt(item), ...listings[parseInt(item).id] 
        }
    })

    // if (!cartItems || !cartItems.length) return ( 
    //     <div className="cart-info">
    //         No items in the cart. Start selecting items to purchase.
    //     </div>
    // )

    // const totalCost = () => { 
    //   let sum = 0 
    //   Object.values(cart).map(item =>{ 
    //     let cartItem = useSelector(state => state.listings[item])
    //     sum += cartItem.price
    //   })
    //   return sum
    // }

    // const onSubmit = (e) => { 
    //     e.preventDefault();
    //    "Purchased the following:\n" +
    //   `${cartItems.map(item => `${item.count} of ${item.name}`).join('\n')}`
    // }

  return (
    <div className="cart">
      <button id='shopping-button' onClick={toggleCart}>
        <AiOutlineShoppingCart />
      </button>
      <div className="cart-container">
        {showCart && (
          <>
            <ul className="cartitem-container">
              {Object.values(cart).map((item, idx) => <CartItem key={idx} item={item}/>)}
            </ul>
            <button id="purchase-button" type="submit">Purchase</button>
        </>
        )}
      </div>
    </div>
  )
}

export default Cart