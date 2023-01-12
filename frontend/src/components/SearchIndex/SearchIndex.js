import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchListings, getListings, getSearchListings } from '../../store/listings'
import SearchIndexItem from './SearchIndexItem'
import './SearchIndex.css'
import { fetchFavorites } from '../../store/favorite'
import { Link } from 'react-router-dom'


const  SearchIndex =() => {
    const dispatch = useDispatch();
    const listings = useSelector(getListings)
    const [search, setSearch] = useState(false)

    useEffect(() => { 
      if (listings.length > 0) setSearch(true)
    }, [])

    useEffect(() => { 
      dispatch(fetchFavorites())
    }, [dispatch])

    if (!listings) { 
        return null
    }

  return (

    <div className='listings-container'>
        {search ? listings.map((listing) => <SearchIndexItem listing={listing} key={listing.id} />) : 
        <div className='noResults'>
          <h2 id="noresults"> No Results Match Your Search</h2>
          {/* <Link to="/" id="nores"><h2 id="noresults">Back to Shopping</h2></Link> */}
        </div>
  }
    </div>
  )
}

export default SearchIndex