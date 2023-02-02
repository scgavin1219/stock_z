import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListings, fetchListings } from '../../store/listings'
import CategoryIndexItem from './CategoryIndexItem'
// import './ListingsIndex.css'
import { fetchFavorites } from '../../store/favorite'


const  ShoesIndex =() => {
    const dispatch = useDispatch();
    const listings = useSelector(getListings)
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(fetchListings())
    }, [dispatch])

    useEffect(() => { 
    if (!sessionUser) return;
      dispatch(fetchFavorites())
    }, [dispatch])

    if (!listings) { 
        return null
    }

    const watches = () => { 
        let watch = []
        listings.map(listing => { 
            if (listing.category === "Sneakers") { 
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

export default ShoesIndex