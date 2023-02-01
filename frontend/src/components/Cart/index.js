import CartItem from "./CartItem";
import './Cart.css'
import { AiOutlineShoppingCart} from 'react-icons/ai'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { fetchItems, removeItems } from "../../store/cart";
import { useHistory } from "react-router-dom";

function Cart() {
    const [showCart, setShowCart] = useState(false)
    const cart = useSelector(state => state.cart)
    const sessionUser = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(()=> { 
      sessionUser ? 
      dispatch(fetchItems()) : 
      dispatch(removeItems())
    }, [dispatch, sessionUser])

    const handlePurchase = (e) => { 
        e.preventDefault();
        setShowCart(false)
        history.push("/checkout")
    }

  const openCart = () => { 
    if (showCart) return;
    setShowCart(true)
  }

  // const closeCart = () => { 
  //   if (!showCart) return;
  //   setShowCart(false)
  // }

  let cartRef = useRef()

  // useEffect(()=> { 
  //   if (!showCart) return;
  //   const closeCart = ()=> { 
  //     setShowCart(false);
  //   };
  //   document.addEventListener('click', closeCart);
  //   return () => document.removeEventListener("click", closeCart)
  // }, [showCart])

  // useEffect(()=> { 
  //   document.addEventListener("mousedown", (event) => { 
  //     if (!cartRef.current.contains(event.target)) {
  //       setShowCart(false)
  //      }
  //   })
  // })

  const toggleCart = () => { 
    showCart ? setShowCart(false) : setShowCart(true)
  }


  return (
    <div className="cart">
      <button id='shopping-button' onClick={toggleCart}>
        <AiOutlineShoppingCart />
      </button>
      <div ref={cartRef} className="cart-container">
        {showCart && (
          <>
            <ul className="cartitem-container">
              {Object.values(cart).map((item, idx) => <CartItem key={idx} item={item}/>)}
            </ul>
            {Object.values(cart).length ? 
            <button id="purchase-button" type="submit" onClick={handlePurchase}>Purchase</button>
            :
            <div className="empty-cart">
              <h3>Your Cart is Empty</h3>
              <button onClick={toggleCart}>Back to Shopping</button>
            </div>
            }
        </>
        )}
      </div>
    </div>
  )
}

export default Cart

