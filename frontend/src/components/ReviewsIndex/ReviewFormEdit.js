
import { useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchReview, getReview, updateReview } from '../../store/reviews'
import { useState } from 'react'
import './ReviewForm.css'

function ReviewFormEdit({review}) {
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
                id: review.id,
                rating: rating, 
                textRating: textRating,
                user_id: sessionUser.id,
                listing_id: listingId
            }
            dispatch(updateReview(payload))
            console.log(payload)
            console.log(review)
            console.log(reviewId)
    }

    useEffect(() => { 
        if (reviewId) { 
            setRating(review.rating)
            setTextRating(review.textRating)
            dispatch(fetchReview(reviewId))
        }
    }, [dispatch])

  return (
    <div className='review-form'>
        <div className='review-create'>
           
            <form onSubmit={handleSubmit}>
                 <h1 id="review-title">Update Review</h1>
                <label>
                    <input type="text" value={rating} placeholder="Enter a Rating from 1 to 5" onChange={e => setRating(e.target.value)} />
                </label>
                    <textarea id="textarea" placeholder="Leave a Review" value={textRating} onChange={e => setTextRating(e.target.value)}></textarea>
                
                <button id="review-button">Update Review</button>
            </form>
        </div>
    </div>
  )
}

export default ReviewFormEdit