import PurchaseItem from './PurchaseItem';
import './Purchase.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, fetchItems, removeItems } from '../../store/cart';
import { useHistory } from 'react-router-dom';

function Purchase() {
    const cart = useSelector(state => state.cart)
    // const listings = useSelector(state => state.listings)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => { 
      dispatch(fetchItems())
    }, [dispatch])

    const handlePurchase = (e) => { 
      e.preventDefault()
      Object.values(cart).map(item => { 
        dispatch(deleteCartItem(item.id))
      })
      dispatch(removeItems())
      history.push("/thanks")
      
    }

    const totalCost = () => { 
      let cost = 0
      Object.values(cart).map(item => { 
        cost += item.price
      })
      return cost.toFixed(2)
    }

    const taxesShipping = () => { 
      return (totalCost() * 0.12).toFixed(2)
    }

    const total = () => { 
      let totcost = parseFloat(taxesShipping())
      let totship = parseFloat(totalCost())
      let grandTotal = (totcost + totship)
      // Math.round((totcost + totship) * 100) / 100
      // let grandTotal = (totcost + totship)
      return grandTotal.toFixed(2)
    }

  return (
    // <div className="purchase">
      <div className="purchase-container">
        <h1>Purchase Order</h1>
            <ul className="purchase-item-container">
              {Object.values(cart).map((item, idx) => <PurchaseItem key={idx} item={item}/>)}
            </ul>
            <div className='total-cost'>
              <h4>Cost: </h4>
              <h4>${totalCost()}</h4>
            </div>
            <div className='shipping-taxes'>
              <h4>Shipping/Taxes: </h4>
              <h4>${taxesShipping()}</h4>
            </div>
            <div className='total'>
              <h4>Total: </h4>
              <h4>${total()}</h4>
            </div>
            <button id="checkout-button" type="submit" onClick={handlePurchase}>Purchase</button>
      </div>
   
  )
}

export default Purchase