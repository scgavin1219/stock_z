import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListing, fetchListing } from '../../store/listings'
import { useParams } from 'react-router-dom'
import { HiTrendingUp } from 'react-icons/hi'
import { HiTrendingDown } from 'react-icons/hi'
import { GrFavorite } from 'react-icons/gr'
import { addItem } from '../../store/cart'
import { Link } from 'react-router-dom'
import './ListingShow.css'

function ListingShow() {
    const dispatch = useDispatch()
    const {listingId} = useParams();
    const listing = useSelector(getListing(listingId))
    
    const handleAdd = (e) => { 
        e.preventDefault();
        dispatch(addItem(listingId))
    }

    const handlePurchase = (e) => { 
        e.preventDefault();
        dispatch(addItem(listingId))
    }

    useEffect(() => { 
        dispatch(fetchListing(listingId))
    }, [listingId, dispatch])

    if (!listing) { 
        return null
    }

    const url = listing.photoUrls[0]

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
                    <div className='show-favorites'>
                        <h4 id="favorites">Add to Favorites</h4>
                        <button id="favorite-show"><GrFavorite /></button>
                    </div>
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
                        <button id="show-button" onClick={handleAdd}>Add to Cart</button>
                        <br/>
                        <Link to="/checkout"><button id="show-button" onClick={handlePurchase}>Purchase Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default ListingShow