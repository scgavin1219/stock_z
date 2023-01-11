import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListings, fetchListings } from '../../store/listings'
import CategoryIndexItem from './CategoryIndexItem'
// import './ListingsIndex.css'
import { fetchFavorites } from '../../store/favorite'


const  ElectronicsIndex =() => {
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

    const watches = () => { 
        let watch = []
        listings.map(listing => { 
            if (listing.category === "Electronics") { 
                watch.push(listing)
            }
        })
        return watch
    }

  return (
    <div className='listings-container'>
        {watches().map((listing) => <CategoryIndexItem listing={listing} key={listing.id} />)}
    </div>

  )
}

export default ElectronicsIndex