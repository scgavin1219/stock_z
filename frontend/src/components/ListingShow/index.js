import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListing, fetchListing } from '../../store/listings'
import { useParams } from 'react-router-dom'
import { HiTrendingUp } from 'react-icons/hi'
import { HiTrendingDown } from 'react-icons/hi'
import { GrFavorite } from 'react-icons/gr'
import './ListingShow.css'

function ListingShow() {
    const dispatch = useDispatch()
    const {listingId} = useParams();
    const listing = useSelector(getListing(listingId))
    
    

    useEffect(() => { 
        dispatch(fetchListing(listingId))
    }, [listingId, dispatch])

    if (!listing) { 
        return null
    }

    const url = listing.photoUrls[0]
    // const url1 = listing.photoUrls[1]
    // const priceChange = Math.abs(listing.price - listing.oldPrice)
    // const pricePercent = (priceChange / listing.oldPrice) * 100 
    // const priceLi = <li>{priceChange}({pricePercent})</li>

  return (
    <>
        <div id="show" className='show-container'>
            <div className='show-title'>
                <h1>{listing.name}</h1>
            </div>
            <div className='show-bottom'>
                <div className='show-pic'>
                    <img src={url} alt="" id="show-img" />
                    {/* <img src={url1} alt="" id="show-img" /> */}
                    <br/>
                    <h4 id="show-li">Add to Favorites <GrFavorite/></h4>
                </div>
                <div className='show-information'>
                    <ul>
                        <li id="show-li"><span id="bold">DESCRIPTION:</span> {listing.description}</li>
                        <br/>
                        <li id="show-li"><span id="bold">STYLE:</span> {listing.style}</li>
                        <br/>
                        <li id="show-li"><span id="bold">COLORWAY:</span> {listing.colorway}</li>
                        <br/>
                        <li id="show-li"><span id="bold">PRICE:</span> ${listing.price}</li>
                        <br/>
                        {listing.price > listing.oldPrice ? 
                
                             <li id="show-li"><span id="bold">PRICE INCREASE: </span><span id="up">({(((Math.abs(listing.price - listing.oldPrice))/ listing.oldPrice) * 100 ).toFixed(2)}%)<HiTrendingUp /></span></li>
                        : 
                            <li id="show-li"><span id="bold">PRICE DECREASE: </span><span id="down">({(((Math.abs(listing.price - listing.oldPrice))/ listing.oldPrice) * 100 ).toFixed(2)}%)<HiTrendingDown /></span></li> }
                        <br/>
                    </ul>
                    <div id="purchase-container">
                        <button id="show-button">Add to Cart</button>
                        <br/>
                        <button id="show-button">Purchase Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='review-container'>
            <div className='review-head'>
                <h1>Reviews</h1>
                <h3>Average Rating</h3>
                <p>only see button if logged in</p>
                <button>Leave a Review</button>
            </div>
            <div className='listing-reviews'>
                <p>Reviews Index goes here</p>
            </div>
            
        </div>
    </>
  )
}

export default ListingShow