import React from 'react'
import { useSelector } from 'react-redux';
import './ReviewIndexItem.js'

const ReviewIndexItem = ({review}) => {

  const sessionUser = useSelector(state => state.session.user);
  console.log(review.createdAt)
  console.log(sessionUser.id)
  console.log(review)
  return (
    <div className='rating-container'>
        <div className='user-rating'>
            <h4 id="bold">username: {sessionUser.username}</h4>
            <h4>{review.rating} STARS</h4>
        </div>
        <div className='star-rating'>
            <h6>{review.createdAt}</h6>
            <h6>placeholder created at: 4 days ago</h6>

        </div>
        <div className='text-rating'>
            <p>{review.textRating}</p>
        </div>
        {sessionUser.id === review.userId &&
        <div className='edit-rating'>
            <button id="rating-button">Edit</button> 
            <button id="rating-button">Delete</button>
        </div>
          }
    </div>
  )
}

export default ReviewIndexItem