import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { deleteReview } from '../../store/reviews.js';
// import ReviewForm from './ReviewForm.js';
import './ReviewIndexItem.js'
import ReviewFormEdit from './ReviewFormEdit'


const ReviewIndexItem = ({review}) => {
  // const [edit, setEdit] = useState(false)
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()
  const [updateForm, setUpdateForm] = useState(false)

  // const formSwitch =() => { 
  //       edit ? setEdit(false) : setEdit(true)
  //   }

    const editSwitch = () => { 
        updateForm ? setUpdateForm(false) : setUpdateForm(true)
    }


  return (
    <div className='rating-container'>
        <div className='user-rating'>
            <h4><span id="bold">username:</span> {review.username}</h4>
            <h4>{review.rating} STARS</h4>
        </div>
        <div className='star-rating'>
            <h6>{review.createdAt}</h6>
        </div>
        <div className='text-rating'>
            <p>{review.textRating}</p>
        </div>
        {sessionUser?.id === review.userId &&
        <div className='edit-rating'>
            <button id="rating-button" onClick={()=> editSwitch()}>Edit</button> 
            <button id="rating-button" onClick={() => dispatch(deleteReview(review.id))}>Delete</button>
        </div>
          }
          {updateForm ? <ReviewFormEdit setUpdateForm={setUpdateForm} review={review} /> : "" }
    </div>
  )
}

export default ReviewIndexItem