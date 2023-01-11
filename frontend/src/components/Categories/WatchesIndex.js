import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListings, fetchListings } from '../../store/listings'
import ListingsIndexItem from './CategoryIndexItem'
// import './ListingsIndex.css'
import { fetchFavorites } from '../../store/favorite'


const  WatchesIndex =() => {
    const dispatch = useDispatch();
    const listings = useSelector(getListings)

    useEffect(() => {
        dispatch(fetchListings())
    }, [dispatch])

    useEffect(() => { 
      dispatch(fetchFavorites())
    }, [dispatch])

    if (!listings) { 
        return null
    }

  return (
    <div className='listings-container'>
        {listings.map((listing) => {
            if (listing.category === "watch") { 
                 <ListingsIndexItem listing={listing} key={listing.id} />}
            })
        }
    </div>
  )
}

export default WatchesIndex