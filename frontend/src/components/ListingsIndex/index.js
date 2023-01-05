import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListings, fetchListings } from '../../store/listings'
import ListingsIndexItem from './ListingsIndexItem'
import './ListingsIndex.css'


const  ListingsIndex =() => {
    const dispatch = useDispatch();
    const listings = useSelector(getListings)

    useEffect(() => {
        dispatch(fetchListings())
    }, [dispatch])

    if (!listings) { 
        return null
    }

  return (
    <div className='listings-container'>
        {listings.map((listing) => <ListingsIndexItem listing={listing} key={listing.id} />)}
    </div>
  )
}

export default ListingsIndex