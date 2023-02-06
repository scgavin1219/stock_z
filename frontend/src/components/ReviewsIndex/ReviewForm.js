
import { useParams } from 'react-router-dom'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createReview } from '../../store/reviews'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './ReviewForm.css'
import { useEffect } from 'react'

function ReviewForm({setReviewForm}) {
    const dispatch = useDispatch()
    const { reviewId } = useParams()
    const { listingId } = useParams()
    // const review = useSelector(getReview(reviewId))
    const [rating, setRating] = useState('')
    const [textRating, setTextRating] = useState('')
    const [hover, setHover] = useState(null)
    const sessionUser = useSelector(state => state.session.user);
    const reviews = useSelector(state => state.reviews )
    const [author, setAuthor] = useState(true)

    const reviewWritten = () => {
        Object.values(reviews).forEach(review => { 
            if (review.userId === sessionUser.id) setAuthor(false)
            console.log(author)
        })
    }

    useEffect(() => {
      reviewWritten()
    }, [dispatch])
    

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
    
  return (
    <div className='review-form'>
        <div className='review-create'>
            <form onSubmit={handleSubmit}>
                 <h1 id="review-title">Create Review</h1>
                 <div className='star-icons' id='star-icons'>
                 {[...Array(5)].map((star, idx) => { 
                    const ratingValue = idx + 1
                    return (
                            <label>
                                <input id="star-rater" type="radio" value={ratingValue} 
                                onClick={() => setRating(ratingValue)}
                                 />

                                <FaStar className='star' color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9" }
                                onMouseEnter={()=>setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)} />
                            </label>
                    )
                 })}
                 </div>
                    <textarea id="textarea" placeholder="Leave a Review" value={textRating} onChange={e => setTextRating(e.target.value)}></textarea>
                {author ? null : <p id="warning">can only write 1 review per listing</p>}
                { author && textRating ? 
                <button id="review-button">Create Review</button>
                : 
                <button id="review-button" disabled>Create Review</button>
                }
            </form>
        </div>
    </div>
  )
}

export default ReviewForm