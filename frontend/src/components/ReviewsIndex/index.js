
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getReviews, fetchReviews} from '../../store/reviews'
import { AiOutlineStar } from 'react-icons/ai'
import ReviewForm from './ReviewForm'
import ReviewIndexItem from './ReviewIndexItem'
import './ReviewsIndex.css'


const ReviewsIndex = () => {
    const dispatch = useDispatch();
    const reviews = useSelector(getReviews)
    const {listingId} = useParams()
    const [reviewForm, setReviewForm] = useState(false)
    

    useEffect(() => { 
        dispatch(fetchReviews(listingId))
    }, [listingId, dispatch])

    const avgRating = () => { 
        let sum = 0 
        reviews.forEach(review => { 
            sum += review.rating
        })
        if (reviews.length) { 
            return (sum/reviews.length).toFixed(2)
        }
    }

     if (!reviews) { 
        return null
    }

    const formSwitch =() => { 
        reviewForm ? setReviewForm(false) : setReviewForm(true)
    }

   

  return (
    <div className='reviews-container'>
        <div className='review-container'>
            <div className='review-head'>
                <h1>Reviews</h1>
                <div className='star-rating'>
                    <h4 id="star-icon"><AiOutlineStar/></h4>
                    <h4> {avgRating()}</h4>
                    <h4 id="reviews-length">({reviews.length} Reviews)</h4>
                </div>
                <button id="create-review" onClick={()=>formSwitch()}>Leave a Review</button>
            </div>
                <>
                    {reviewForm ? <ReviewForm setReviewForm={setReviewForm} /> : "" }
                </>
        </div>
        {reviews.map(review => <ReviewIndexItem review={review} key={review.id}  />)}
        
    </div>
  )
}

export default ReviewsIndex