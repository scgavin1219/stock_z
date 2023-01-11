import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListing, fetchListing } from '../../store/listings'
import { useParams } from 'react-router-dom'
import { HiTrendingUp } from 'react-icons/hi'
import { HiTrendingDown } from 'react-icons/hi'
import { GrFavorite } from 'react-icons/gr'
import { createCartItem } from '../../store/cart'
import jordan1 from './jordan1-1.png'
import jordan2 from './jordan1-3.png'
import jordan3 from './jordan1-2.png'
import jordan4 from './jordan1-4.png'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { MdFavorite } from 'react-icons/md'
import { deleteFavorite, createFavorite } from '../../store/favorite'
import './ListingShow.css'

function ListingShow() {
    const dispatch = useDispatch()
    const {listingId} = useParams();
    const listing = useSelector(getListing(listingId))
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory()
    const [favorite, setFavorite] = useState(false)
    const [currentIdx, setCurrentIdx] = useState(0)
    // const url = listing.photoUrls[0]

    const slide = [jordan1, jordan2, jordan3, jordan4]
    
    
    const handleAdd = (e) => { 
        e.preventDefault();
        const payload = {
            user_id: sessionUser.id,
            listing_id: parseInt(listingId),
        }
        dispatch(createCartItem(payload))
    }

    useEffect(() => {
        // dispatch(fetchFavorites())
    }, [dispatch])

    useEffect(()=> { 
    const showInterval = setInterval(()=> { 
      if (currentIdx < slide.length - 1) { 
        setCurrentIdx(currentIdx + 1)
      } else { 
        setCurrentIdx(0)
      }
    }, 4000) 
    return () => clearInterval(showInterval)
  }, [currentIdx])

    const handleDeleteFavorite = (e) => { 
        e.preventDefault()
        dispatch(deleteFavorite(listing.id))
        setFavorite(false)
    }

    const handleAddFavorite = (e) => {
        e.preventDefault() 
            const payload = { 
                user_id: sessionUser.id,
                listing_id: listing.id
            }
            dispatch(createFavorite(payload))
            setFavorite(true)
    }

    const handlePurchase = (e) => { 
        e.preventDefault();
        handleAdd(e)
        history.push("/checkout")
    }

    useEffect(() => { 
        dispatch(fetchListing(listingId))
    }, [listingId, dispatch])

    if (!listing) { 
        return null
    }

  return (
    <>
        <div id="show" className='show-container'>
            <div className='show-title'>
                <h1>{listing.name}</h1>
            </div>
            <div className='show-bottom'>
                <div className='show-pic'>
                    <img src={slide[currentIdx]} alt="" id="show-img" />
                    {/* <img src={url1} alt="" id="show-img" /> */}
                    <br/>
                    <div className='show-favorites'>
                        <h4 id="favorites">Add to Favorites</h4>
                        {listing.liked || favorite ? <button id="favorite-show" onClick={handleDeleteFavorite}><MdFavorite /></button> : <button id="favorite-non-show" onClick={handleAddFavorite}><GrFavorite /></button>}
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
                        <li id="show-li"><span id="bold">PRICE:</span> ${listing.price.toFixed(2)}</li>
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
                        <button id="show-button"onClick={handlePurchase}>Purchase Now</button>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default ListingShow