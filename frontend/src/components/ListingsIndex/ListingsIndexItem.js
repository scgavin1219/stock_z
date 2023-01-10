import React from 'react'
// import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './ListingsIndex.css'
import { GrFavorite } from 'react-icons/gr'
import { HiTrendingUp } from 'react-icons/hi'
import { HiTrendingDown } from 'react-icons/hi'
import  jordan1 from './jordan1-1.png'
import { createFavorite, deleteFavorite, fetchFavorites, getFavorites } from '../../store/favorite'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'


const ListingsIndexItem= ({listing}) => {
    const dispatch = useDispatch()
    const [favorite, setFavorite] = useState(false)
    // const favorites = useSelector(state => state.favorites)
    const sessionUser = useSelector(state => state.session.user);
    // const { listingId } = useParams()
    const favorites = useSelector(getFavorites)

    useEffect(() => {
        dispatch(fetchFavorites())
    }, [dispatch])

    // const favoriteCheck = () => { 
    //     Object.values(favorites).map(favorite => { 
    //         if (favorite.listingId === listing.id) setFavorite(true)
    //         return favorite.id
    //     })
    // }

    const handleFavorite = (e) => {
        e.preventDefault() 
        if (favorite) { 
            dispatch(deleteFavorite(listing.id))
            setFavorite(false)
    
        } else { 
            const payload = { 
                user_id: sessionUser.id,
                listing_id: listing.id
            }
            dispatch(createFavorite(payload))
            setFavorite(true)
        }
    }

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
                        <button id="favorite" onClick={handleFavorite}><GrFavorite /></button>
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