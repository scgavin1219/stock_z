
import { useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createReview, fetchReview, getReview, updateReview } from '../../store/reviews'
import { useState } from 'react'
import './ReviewForm.css'

function ReviewForm() {
    const dispatch = useDispatch()
    const { reviewId } = useParams()
    const { listingId } = useParams()
    const review = useSelector(getReview(reviewId))
    const [rating, setRating] = useState('')
    const [textRating, setTextRating] = useState('')
    const [edit, setEdit] = useState(false)

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
        }
    

    useEffect(() => { 
        if (reviewId) { 
            setEdit(true)
            setRating(review.rating)
            setTextRating(review.textRating)
            dispatch(fetchReview(reviewId))
        }
    }, [dispatch])

  return (
    <div className='review-form'>
        <div className='review-create'>
           
            <form onSubmit={handleSubmit}>
                 <h1 id="review-title">{edit ? "Update Review" : "Create Review"}</h1>
                <label>
                    <input type="text" value={rating} placeholder="Enter a Rating from 1 to 5" onChange={e => setRating(e.target.value)} />
                </label>
                    {/* <input type="text" value={textRating} onChange={e => setTextRating(e.target.value)} /> */}
                    <textarea id="textarea" placeholder="Leave a Review" value={textRating} onChange={e => setTextRating(e.target.value)}></textarea>
                
                <button id="review-button">{edit ? "Update Review" : "Create Review"}</button>
            </form>
        </div>
    </div>
  )
}

export default ReviewForm