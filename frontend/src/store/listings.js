import { REMOVE_FAVORITE } from "./favorite"

export const RECEIVE_LISTINGS = "listings/RECEIVE_LISTINGS"
export const RECEIVE_LISTING = "listings/RECEIVE_LISTING"
export const REMOVE_LISTING = "listings/REMOVE_LISTING"
export const REMOVE_LISTINGS = "listings/REMOVE_LISTINGS"

const receiveListings = listings => ({ 
    type: RECEIVE_LISTINGS,
    listings
})

const receiveListing = listing => ({
    type: RECEIVE_LISTING,
    listing
})

const removeListing = listingId => ({
    type: REMOVE_LISTING,
    listingId
})

const removeListings = () => ({ 
    type: REMOVE_LISTINGS
})


export const getListings = store => { 
    return (store.listings) ? Object.values(store.listings) : []
}

// export const getSearchListings = query => dispatch => { 
//     return fetchSearchListings(query).then(result => dispatch(receiveListings(result)))
// }

export const getListing = listingId => store => {
    return (store.listings && store.listings[listingId]) ? store.listings[listingId] : null
}

export const fetchListings = () => async dispatch => { 
    const res = await fetch(`/api/listings`)
    if (res.ok) { 
        const listings = await res.json();
        dispatch(receiveListings(listings))
    }
}

export const fetchSearchListings = (query) => async dispatch => { 
    const res = await fetch(`/api/listings/search/${query}`)
    if (res.ok) { 
        const search = await res.json();
        dispatch(receiveListings(search))
    } else { 
        dispatch(removeListings())
    }
}

export const fetchListing =(listingId) => async dispatch => { 
    const res = await fetch(`/api/listings/${listingId}`)
    if (res.ok) { 
        const listing = await res.json();
        dispatch(receiveListing(listing))
    }
}

export const deleteListing = (listingId) => async dispatch => { 
    const res =await fetch(`/api/listings/${listingId}`, { 
        method: "DELETE"
    })
    if (res.ok) { 
        dispatch(removeListing(listingId))
    }
}

const listingReducer = (state= {}, action) =>  { 
    const newState = {...state}
    switch (action.type) { 
        case RECEIVE_LISTING: 
            return {...newState, [action.listing.id]: action.listing}
        case RECEIVE_LISTINGS: 
            return { ...action.listings}
        case REMOVE_LISTING: 
            delete newState[action.listingId]
            return newState
        case REMOVE_LISTINGS: 
            return {};
        case REMOVE_FAVORITE:
            const listing = newState[action.favorite.listingId]
            listing.liked = false
            return newState
        default: 
            return state;
    }
}

export default listingReducer
