
import { useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createReview, fetchReview, getReview, updateReview } from '../../store/reviews'
import { useState } from 'react'

function ReviewForm() {
    const dispatch = useDispatch()
    const { reviewId } = useParams()
    const review = useSelector(getReview(reviewId))
    const [rating, setRating] = useState('')
    const [writtenReview, setWrittenReview] = useState('')
    const [edit, setEdit] = useState(false)

    const handleSubmit = () => { 
        if (reviewId) { 
            const payload = { 
                id: reviewId,
                rating, 
                writtenReview
            }
            dispatch(updateReview(payload))
        } else { 
            const payload = {
                rating, 
                writtenReview
            }
            dispatch(createReview(payload))
        }
    }

    useEffect(() => { 
        if (reviewId) { 
            setEdit(true)
            setRating(review.rating)
            setWrittenReview(review.text_rating)
            dispatch(fetchReview(reviewId))
        }
    }, [dispatch, reviewId])

  return (
    <div>
            <h1>{edit ? "Update Review" : "Create Review"}</h1>
            <form onSubmit={handleSubmit}>
                <label>Rating
                    <input type="text" value={rating} onChange={e => setRating(e.target.value)} />
                </label>
                
                <label>Review
                    <input type="text" value={writtenReview} onChange={e => setWrittenReview(e.target.value)} />
                </label>

                <button>{edit ? "Update Review" : "Create Review"}</button>
            </form>
    </div>
  )
}

export default ReviewForm