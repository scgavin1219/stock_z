import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { deleteReview } from '../../store/reviews.js';
import './ReviewIndexItem.js'
import ReviewFormEdit from './ReviewFormEdit'
import moment from 'moment'
import { FaStar } from 'react-icons/fa'

const ReviewIndexItem = ({review}) => {
 
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()
  const [updateForm, setUpdateForm] = useState(false)

    const editSwitch = () => { 
        updateForm ? setUpdateForm(false) : setUpdateForm(true)
    }

  return (
    <div className='rating-container'>
      {updateForm ? <ReviewFormEdit setUpdateForm={setUpdateForm} review={review} /> :  
        <>
        <div className='user-rating'>
            <h4><span id="bold">username:</span> {review.username}</h4>
             <div className='star-icons' id='star-icons'>
                 {[...Array(5)].map((star, idx) => { 
                    const ratingValue = idx + 1
                    return (
                        <>
                          <FaStar className='star' color={ratingValue <= review.rating ? "#ffc107" : "#e4e5e9" } />
                        </>
                    )
                 })}
                 </div>
        </div>
        <div className='star-rating'>
            <h6 id="time-ago"><time title={new Date(review.createdAt).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) }>{moment(review.createdAt).fromNow()}</time></h6>
        </div>
        <div className='text-rating'>
            <p>{review.textRating}</p>
        </div>
        </>
      }
        {sessionUser?.id === review.userId &&
        <div className='edit-rating'>
            <button id="rating-button" onClick={()=> editSwitch()}>Edit</button> 
            <button id="rating-button" onClick={() => dispatch(deleteReview(review.id))}>Delete</button>
        </div>
          }
          {/* {updateForm ? <ReviewFormEdit setUpdateForm={setUpdateForm} review={review} /> : "" } */}
    </div>
  )
}

export default ReviewIndexItem

