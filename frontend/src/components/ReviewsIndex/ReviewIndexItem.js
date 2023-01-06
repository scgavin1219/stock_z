import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { deleteReview } from '../../store/reviews.js';
import ReviewForm from './ReviewForm.js';
import './ReviewIndexItem.js'

const ReviewIndexItem = ({review}) => {
  const [edit, setEdit] = useState(false)
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()

  const formSwitch =() => { 
        edit ? setEdit(false) : setEdit(true)
    }

  console.log(review.user)
  console.log(review.createdAt)

  return (
    <div className='rating-container'>
        <div className='user-rating'>
            <h4 id="bold">username: {review.userId}</h4>
            <h4>{review.rating} STARS</h4>
        </div>
        <div className='star-rating'>
            <h6>{review.createdAt}</h6>
            <h6>placeholder created at: 4 days ago</h6>

        </div>
        <div className='text-rating'>
            <p>{review.textRating}</p>
        </div>
        {sessionUser?.id === review.userId &&
        <div className='edit-rating'>
            <button id="rating-button" onClick={()=> formSwitch()}>Edit</button> 
            <button id="rating-button" onClick={() => dispatch(deleteReview(review.id))}>Delete</button>
        </div>
          }
          {edit ? <ReviewForm /> : ""}
    </div>
  )
}

export default ReviewIndexItem