import React from 'react'
// import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './ListingsIndex.css'
import { GrFavorite } from 'react-icons/gr'
import { HiTrendingUp } from 'react-icons/hi'
import { HiTrendingDown } from 'react-icons/hi'
import  jordan1 from './jordan1-1.png'


const ListingsIndexItem= ({listing}) => {
    // const dispatch = useDispatch()

    // const image = listing.photoUrls.length ? <img src={listing.photoUrls[0]} alt="" /> : null

    // const url = listing.photoUrls[0]

  return (
    <>
        <div className='product-container'>
            <div className='listing-pic'>
                <Link id="index-img" to={`listings/${listing.id}`}><img src={jordan1} alt="" id="test-img" /></Link>
            </div>
            <div id='listing-title'>
                <div id="bottombox">
                    <div id="bottombox-left">
                        <Link to={`listings/${listing.id}`} id="index-title"><span id="bold">{listing.name}</span></Link>
                        <button id="favorite"><GrFavorite /></button>
                    </div>
                    <div id="bottombox-right">
                        <h6 id="listing-price">${listing.price.toFixed(2)}</h6>
                        {listing.price > listing.oldPrice ? <span id="up"><HiTrendingUp /></span> : <span id="down"><HiTrendingDown /></span>}
                         {/* <h6>({(((Math.abs(listing.price - listing.oldPrice))/ listing.oldPrice) * 100 ).toFixed(2)}%)<HiTrendingDown /></h6> */}
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default ListingsIndexItem