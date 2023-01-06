
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getReviews, fetchReviews} from '../../store/reviews'
import ReviewIndexItem from './ReviewIndexItem'
import './ReviewsIndex.css'

const ReviewsIndex = () => {
    const dispatch = useDispatch();
    const reviews = useSelector(getReviews)
    const {listingId} = useParams()

    useEffect(() => { 
        dispatch(fetchReviews(listingId))
    }, [dispatch, listingId])

  return (
    <div className='reviews-container'>
        {reviews.map(review => <ReviewIndexItem review={review} key={review.id}  />)}
        
    </div>
  )
}

export default ReviewsIndex