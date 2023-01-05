
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReviews, fetchReviews} from '../../store/reviews'
import ReviewIndexItem from './ReviewIndexItem'
import './ReviewsIndex.css'

function ReviewsIndex() {
    const dispatch = useDispatch();
    const reviews = useSelector(getReviews)

    useEffect(() => { 
        dispatch(fetchReviews())
    }, [dispatch])

    if (!reviews) { 
        return null
    }

  return (
    <div className='reviews-container'>
        {reviews.map(review => <ReviewIndexItem review={review} key={review.id}  />)}
    </div>
  )
}

export default ReviewsIndex