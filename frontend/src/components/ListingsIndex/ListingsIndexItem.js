import React from 'react'
// import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './ListingsIndex.css'
import { GrFavorite } from 'react-icons/gr'
import { HiTrendingUp } from 'react-icons/hi'
import { HiTrendingDown } from 'react-icons/hi'


const ListingsIndexItem= ({listing}) => {
    // const dispatch = useDispatch()

  return (
    <div className='product-container'>
        <div className='listing-pic'>
            <p>picture here</p>
        </div>
        <div id='listing-title'>
            <div id="bottombox">
                <div id="bottombox-left">
                    <Link to={`listings/${listing.id}`}>{listing.name}</Link>
                    <GrFavorite />
                </div>
                <div id="bottombox-right">
                    <h6 id="listing-price">${listing.price}</h6>
                    {listing.price > listing.oldPrice ? <HiTrendingUp /> : <HiTrendingDown />}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListingsIndexItem