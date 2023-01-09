
import { useParams } from 'react-router-dom'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createReview } from '../../store/reviews'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './ReviewForm.css'

function ReviewForm({setReviewForm}) {
    const dispatch = useDispatch()
    const { reviewId } = useParams()
    const { listingId } = useParams()
    // const review = useSelector(getReview(reviewId))
    const [rating, setRating] = useState('')
    const [textRating, setTextRating] = useState('')
    

    const sessionUser = useSelector(state => state.session.user);

    const handleSubmit = (e) => { 
        e.preventDefault()
            const payload = {
                rating: rating, 
                text_rating: textRating,
                user_id: sessionUser.id,
                listing_id: listingId
            }
            dispatch(createReview(payload))
            setRating("")
            setTextRating("")
            setReviewForm(false)
        }
    

    // useEffect(() => { 
    //     if (reviewId) { 
    //         setEdit(true)
    //         setRating(review.rating)
    //         setTextRating(review.textRating)
    //         dispatch(fetchReview(reviewId))
    //     }
    // }, [reviewId, dispatch])

  return (
    <div className='review-form'>
        <div className='review-create'>
           
            <form onSubmit={handleSubmit}>
                 <h1 id="review-title">Create Review</h1>
                 {/* <div className='star-icons' id='star-icons'>
                 {[...Array(5)].map((star, idx) => { 
                    const ratingValue = idx + 1
                    return (
                            <label>
                                <input id="star-rater" type="radio" value={ratingValue} onClick={() => setRating(ratingValue)} />
                                <FaStar className='star' color={ratingValue} />
                            </label>
                    )
                 })}
                 </div> */}
                <label>
                    <input type="text" value={rating} placeholder="Enter a Rating from 1 to 5" onChange={e => setRating(e.target.value)} />
                </label>
                    <textarea id="textarea" placeholder="Leave a Review" value={textRating} onChange={e => setTextRating(e.target.value)}></textarea>
                
                <button id="review-button">Create Review"</button>
            </form>
        </div>
    </div>
  )
}

export default ReviewForm