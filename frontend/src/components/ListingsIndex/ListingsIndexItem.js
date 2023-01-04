import React from 'react'
// import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './ListingsIndex.css'

const ListingsIndexItem= ({listing}) => {
    // const dispatch = useDispatch()

  return (
    <div className='product-container'>
        <div className='listing-pic'>
            <p>picture here</p>
        </div>
        <div id='listing-title'>
            <div id="bottombox">
                <Link to={`listings/${listing.id}`}>{listing.name}</Link>
                <h6 id="listing-price">${listing.price}</h6>
            </div>
        </div>
    </div>
  )
}

export default ListingsIndexItem