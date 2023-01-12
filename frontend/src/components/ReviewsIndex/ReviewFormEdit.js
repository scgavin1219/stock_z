
import { useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchReview, getReview, updateReview } from '../../store/reviews'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './ReviewForm.css'

function ReviewFormEdit({review, setUpdateForm}) {
    const dispatch = useDispatch()
    const { reviewId } = useParams()
    const { listingId } = useParams()
    // const review = useSelector(getReview(reviewId))
    const [rating, setRating] = useState('')
    const [textRating, setTextRating] = useState('')
    const [hover, setHover] = useState(null)


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
            setRating("")
            setTextRating("")
            setUpdateForm(false)
            
    }

    // useEffect(() => { 
    //     if (review.id) { 
    //         setRating(review.rating)
    //         setTextRating(review.textRating)
    //         dispatch(fetchReview(review.id))
    //     }
    // }, [dispatch])

  return (
    <div className='review-form'>
        <div className='review-create'>
           
            <form onSubmit={handleSubmit}>
                 <h1 id="review-title">Update Review</h1>
                  <div className='star-icons' id='star-icons'>
                 {[...Array(5)].map((star, idx) => { 
                    const ratingValue = idx + 1
                    return (
                            <label>
                                <input id="star-rater" type="radio" value={review.rating} 
                                onClick={() => setRating(ratingValue)}
                                 />

                                <FaStar className='star' color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9" }
                                onMouseEnter={()=>setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)} />
                            </label>
                    )
                 })}
                 </div>
                {/* <label>
                    <input type="text" value={rating} placeholder="Enter a Rating from 1 to 5" onChange={e => setRating(e.target.value)} />
                </label> */}
                    <textarea id="textarea" placeholder="Leave a Review" value={review.textRating} onChange={e => setTextRating(e.target.value)}></textarea>
                
                <button id="review-button">Update Review</button>
            </form>
        </div>
    </div>
  )
}

export default ReviewFormEdit