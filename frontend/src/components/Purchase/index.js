import PurchaseItem from './PurchaseItem';
import './Purchase.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { icons } from "react-icons/lib";
import { useState } from "react";

function Purchase() {
    const cart = useSelector(state => state.cart)
    const listings = useSelector(state => state.listings)
    const dispatch = useDispatch()

  return (
    <div className="purchase">
      <div className="purchase-container">
            <ul className="purchase-item-container">
              {Object.values(cart).map((item, idx) => <PurchaseItem key={idx} item={item}/>)}
            </ul>
            <button id="checkout-button" type="submit">Purchase</button>
      </div>
    </div>
  )
}

export default Purchase