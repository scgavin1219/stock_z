import csrfFetch from "./csrf";
import { fetchListing } from "./listings";

export const RECEIVE_FAVORITE = 'favorites/RECEIVE_FAVORITE'
export const RECEIVE_FAVORITES = 'favorites/RECEIVE_FAVORITES'
export const REMOVE_FAVORITE = 'favorites/REMOVE_FAVORITE'
export const REMOVE_FAVORITES = 'favorites/REMOVE_FAVORITES'

export const receiveFavorite = favorite => ({
    type: RECEIVE_FAVORITE,
    favorite
})

export const receiveFavorites = favorites => ({
    type: RECEIVE_FAVORITES,
    favorites
})

export const removeFavorite = (favoriteId) => ({
    type: REMOVE_FAVORITE, 
    favoriteId
})

export const removeFavorites = () => ({
    type: REMOVE_FAVORITES
})

export const getFavorites = store => { 
    return store.favorites ? Object.values(store.favorites) : []
}

export const getFavorite = favoriteId => store => {
    return (store.favorites && store.favorites[favoriteId]) ? store.favorites[favoriteId] : null
}

export const fetchFavorites = () => async dispatch => { 
    const res = await csrfFetch(`/api/favorites`)
    if (res.ok) { 
        const favorites = await res.json();
        dispatch(receiveFavorites(favorites))
    }
}

export const fetchFavorite = (favoriteId) => async dispatch => { 
    const res = await csrfFetch(`/api/favorites/${favoriteId}`)
    if (res.ok) { 
        const favorite = await res.json();
        dispatch(receiveFavorite(favorite))
    }
}

export const createFavorite = (favorite) => async dispatch => { 
    const res = await csrfFetch(`/api/favorites`, { 
        method: "POST",
        body: JSON.stringify(favorite),
        headers: { 
            "Content-Type": "application/json", 
            "Accept": "application/json"
        }
    })
    if (res.ok) { 
        const newFavorite = await res.json();
        dispatch(receiveFavorite(newFavorite))
        dispatch(fetchListing(newFavorite.listingId))
    }
}

export const deleteFavorite = (favoriteId) => async dispatch => { 
    const res = await csrfFetch(`/api/favorites/${favoriteId}`, { 
        method: "DELETE"
    })
    if (res.ok) dispatch(removeFavorite(favoriteId))
}


const favoritesReducer = (state = {}, action ) => { 
    const newState = {...state}
    switch (action.type) { 
        case RECEIVE_FAVORITE: 
            return {...newState, [action.favorite.id]: action.favorite }
        case RECEIVE_FAVORITES: 
            return { ...action.favorites}
        case REMOVE_FAVORITE:
            delete newState[action.favoriteId]
            return newState
        case REMOVE_FAVORITES:
            return {}
        default: 
            return state
    }
}

export default favoritesReducer