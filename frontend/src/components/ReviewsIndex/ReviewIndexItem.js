import React from 'react'
import { useSelector } from 'react-redux';
import './ReviewIndexItem.js'

const ReviewIndexItem = ({review}) => {

    const sessionUser = useSelector(state => state.session.user);

  return (
    <div className='review-container'>
        <div className='user-rating'>
            <h4>{sessionUser.username}</h4>
            <h4>{review.rating}</h4>
        </div>
        <div className='text-rating'>
            <textarea>{review.text_rating}</textarea>
        </div>
        {sessionUser.id === review.user_id &&
        <div className='edit-rating'>
            <button>Edit</button> 
            <button>Delete</button>
        </div>
          }
    </div>
  )
}

export default ReviewIndexItem