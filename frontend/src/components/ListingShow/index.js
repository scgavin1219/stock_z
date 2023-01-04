import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListing, fetchListing } from '../../store/listings'
import { useParams } from 'react-router-dom'

function ListingShow() {
    const dispatch = useDispatch()
    const {listingId} = useParams();
    const listing = useSelector(getListing(listingId))

    useEffect(() => { 
        dispatch(fetchListing(listingId))
    }, [listingId])




  return (
    <div className='show-container'>
        <h1>{listing.name}</h1>
        <div className='show-pic'>
            <p>pic goes here</p>
        </div>
        <div className='show-information'>
            <ul>
                <li>{listing.description}</li>
                <li>{listing.style}</li>
                <li>{listing.colorway}</li>
                <li>{listing.price}</li>
            </ul>
        </div>
    </div>
  )
}

export default ListingShow