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
    const url = listing.photoUrls[0]
    const url1 = listing.photoUrls[1]

    useEffect(() => { 
        dispatch(fetchListing(listingId))
    }, [listingId])

    if (!listing) { 
        return null
    }

  return (
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
                    <li id="show-li">DESCRIPTION: {listing.description}</li>
                    <br/>
                    <li id="show-li">STYLE: {listing.style}</li>
                    <br/>
                    <li id="show-li">COLORWAY: {listing.colorway}</li>
                    <br/>
                    <li id="show-li">PRICE: ${listing.price}</li>
                    <br/>
                    {listing.price > listing.oldPrice ? <li id="show-li">Above Retail <HiTrendingUp /></li> : <li id="show-li">Below Retail <HiTrendingDown /></li>}
                    <br/>
                </ul>
                <div id="purchase-container">
                    <button>Add to Cart</button>
                    <br/>
                    <button>Purchase Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListingShow