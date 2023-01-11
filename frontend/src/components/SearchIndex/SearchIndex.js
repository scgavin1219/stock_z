import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchListings, getListings, getSearchListings } from '../../store/listings'
import SearchIndexItem from './SearchIndexItem'
import './SearchIndex.css'
import { fetchFavorites } from '../../store/favorite'


const  SearchIndex =() => {
    const dispatch = useDispatch();
    const listings = useSelector(getListings)

    // useEffect(() => {
    //     dispatch(fetchListings())
    // }, [dispatch])

    useEffect(() => { 
      dispatch(fetchFavorites())
    }, [dispatch])

    if (!listings) { 
        return null
    }

  return (
    <div className='listings-container'>
        {listings.map((listing) => <SearchIndexItem listing={listing} key={listing.id} />)}
    </div>
  )
}

export default SearchIndex