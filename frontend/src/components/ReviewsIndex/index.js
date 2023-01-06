
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
        <div className='review-container'>
            <div className='review-head'>
                <h1>Reviews</h1>
                <h4>Average Rating</h4>
                <button>Leave a Review</button>
            </div>
        </div>
        {reviews.map(review => <ReviewIndexItem review={review} key={review.id}  />)}
        
    </div>
  )
}

export default ReviewsIndex