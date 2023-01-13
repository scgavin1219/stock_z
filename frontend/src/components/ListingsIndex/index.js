import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListings, fetchListings } from '../../store/listings'
import ListingsIndexItem from './ListingsIndexItem'
import './ListingsIndex.css'
import { fetchFavorites, removeFavorites, getFavorites } from '../../store/favorite'


const  ListingsIndex =() => {
    const dispatch = useDispatch();
    const listings = useSelector(getListings)
    const favorites = useSelector(getFavorites)
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(fetchListings())
        if (sessionUser) dispatch(fetchFavorites())
    }, [sessionUser])

    // useEffect(() => { 
    //   dispatch(fetchFavorites())
    // }, [dispatch])

    if (!listings) { 
        return null
    }

  return (
    <div className='listings-container'>
        {listings.map((listing) => <ListingsIndexItem listing={listing} key={listing.id} initialFavorite={listing.liked} />)}
    </div>
  )
}

export default ListingsIndex