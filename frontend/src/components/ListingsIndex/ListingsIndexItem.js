import React from 'react'
import { Link } from 'react-router-dom'
import './ListingsIndex.css'
import { GrFavorite } from 'react-icons/gr'
import { MdFavorite } from 'react-icons/md'
import { HiTrendingUp } from 'react-icons/hi'
import { HiTrendingDown } from 'react-icons/hi'
import  jordan1 from '../../assets/jordan1-1.png'
import jordan2 from '../../assets/jordan1-3.png'
import { createFavorite, deleteFavorite, fetchFavorites, removeFavorites  } from '../../store/favorite'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'



const ListingsIndexItem= ({listing, initialFavorite}) => {
    const dispatch = useDispatch()
    const [favorite, setFavorite] = useState(listing.liked)
    const sessionUser = useSelector(state => state.session.user);
    const favorited = useSelector(state => state.favorites)
    const [currentIdx, setCurrentIdx] = useState(0)
    const url1 = listing.photoUrls[0]
    const url2 = listing.photoUrls[1]
    const slide = [url1, url2]

    

    const favoriteId = () => { 
        let favId = null
        Object.values(favorited).map(favorite => { 
            if (favorite.listingId === listing.id)  favId = favorite.id;
        })
        return favId
    }

     const handleDeleteFavorite = (e) => { 
        e.preventDefault()
        dispatch(deleteFavorite(favoriteId()))
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
 

  return (
    <>
        <div className='product-container'>
            <div className='listing-pic'>
                
                <Link id="index-img" to={`listings/${listing.id}`}><img src={slide[currentIdx]} alt="" id="test-img" /></Link>
            </div>
            <div id='listing-title'>
                <div id="bottombox">
                    <div id="bottombox-left">
                        <Link to={`listings/${listing.id}`} id="index-title"><span id="bold">{listing.name}</span></Link>
                         { initialFavorite && sessionUser ? <button id="non-fav" onClick={handleDeleteFavorite}><MdFavorite /></button> : <button id="favorite" onClick={handleAddFavorite}><GrFavorite /></button>}
                    </div>
                    <div id="bottombox-right">
                        <h6 id="listing-price">${listing.price.toFixed(2)}</h6>
                        {listing.price  > listing.oldPrice ? <span id="up"><HiTrendingUp id="up"/></span> : <span id="down"><HiTrendingDown id="down" /></span>}
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default ListingsIndexItem