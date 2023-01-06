import csrfFetch, { storeCSRFToken } from "./csrf"

export const RECEIVE_REVIEW = "reviews/RECEIVE_REVIEW"
export const RECEIVE_REVIEWS = "reviews/RECEIVE_REVIEWS"
export const REMOVE_REVIEW = "reviews/REMOVE_REVIEW"

const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
})

const receiveReview = review => ({
    type: RECEIVE_REVIEW, 
    review
})

const removeReview = reviewId =>({
    type: REMOVE_REVIEW,
    reviewId
})

export const getReviews = store => {
    return (store.reviews) ? Object.values(store.reviews) : []
}

export const getReview = reviewId => store => {
    return (store.reviews && store.reviews[reviewId]) ? store.reviews[reviewId] : null
}

export const fetchReviews = (listingId) => async dispatch => {
    const res = await csrfFetch(`/api/listings/${listingId}/reviews`)
    if (res.ok) { 
        const reviews = await res.json();
        dispatch(receiveReviews(reviews))
    }
}

export const fetchReview = (reviewId) => async dispatch => { 
    const res = await csrfFetch(`api/reviews/${reviewId}`)
    if (res.ok) { 
        const review = await res.json();
        dispatch(receiveReview(review))
    }
}

export const createReview = (review) => async dispatch => { 
    const res = await csrfFetch(`/api/reviews`, { 
        method: "POST",
        body: JSON.stringify(review),
        headers: {
            "Content-Type": "application/json",
            "Aceept": "application/json"
        }
    })
    if (res.ok) { 
        const newReview = await res.json();
        dispatch(receiveReview(newReview))
    }
}

export const updateReview =(review) => async dispatch => {
    const res = await csrfFetch(`/api/reviews`, {
        method: "PUT", 
        body: JSON.stringify(review), 
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    const updatedReview = await res.json();
    dispatch(receiveReview(updatedReview))
}

export const deleteReview = (reviewId) => async dispatch => { 
    const res = await csrfFetch(`/api/reviews/${reviewId}`, { 
        method: "DELETE"
    })
    if (res.ok) dispatch(removeReview(reviewId))
}

const reviewsReducer = (state = {}, action) => { 
    const newState = {...state}
    switch (action.type) { 
        case RECEIVE_REVIEW:
            return {...newState, [action.review.id]: action.review }
        case RECEIVE_REVIEWS: 
            return {...newState, ...action.reviews}
        case REMOVE_REVIEW: 
            delete newState[action.reviewId]
            return newState
        default: 
            return state;
    }
}

export default reviewsReducer