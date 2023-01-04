import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListing, fetchListing } from '../../store/listings'
import { useParams } from 'react-router-dom'
import './ListingShow.css'

function ListingShow() {
    const dispatch = useDispatch()
    const {listingId} = useParams();
    const listing = useSelector(getListing(listingId))

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
                <p>pic goes here</p>
            </div>
            <div className='show-information'>
                <ul>
                    <li>DESCRIPTION: {listing.description}</li>
                    <li>STYLE: {listing.style}</li>
                    <li>COLORWAY: {listing.colorway}</li>
                    <li>PRICE: {listing.price}</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ListingShow