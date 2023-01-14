import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './Favorites.css'
import jordan1 from '../../assets/jordan1-1.png'
import { MdFavorite } from 'react-icons/md'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { createCartItem } from '../../store/cart'
import { deleteFavorite, fetchFavorites } from '../../store/favorite'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';



function FavoriteIndexItem({favorite}) {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);

    // const image = listing.photoUrls.length ? <img src={listing.photoUrls[0]} alt="" /> : null
    const url1 = favorite.photoUrls[0]
    const url2 = favorite.photoUrls[1]
    const slide = [url1, url2]
  
  const handleAdd = (e) => { 
        e.preventDefault();
        const payload = {
            user_id: sessionUser.id,
            listing_id: parseInt(favorite.listingId),
        }
        dispatch(createCartItem(payload))
  }

  const handleDeleteFavorite = (e) => { 
        e.preventDefault()
        dispatch(deleteFavorite(favorite.id))
        //not rerendering page on deletes
    }

    useEffect(()=> { 
      dispatch(fetchFavorites())
    }, [dispatch])

  return (
    <li  className="purchase-item">
      <div className='purchase-info'>
        <div className='purchase-item-image'><img src={url1} alt="" id="purchase-img" /></div>
        <div className="purchase-item-header">{favorite.name}</div>
        <div className='purchase-item-price' id="purchase-page-price">${(favorite.price).toFixed(2)}</div>
         <button id="purchase-item-button" onClick={handleDeleteFavorite} >< MdFavorite  id="favorite-favorite" /></button>
         <button id="purchase-cart" onClick={handleAdd}><MdOutlineAddShoppingCart/></button>
      </div>
    </li>
   
  )
}

export default FavoriteIndexItem