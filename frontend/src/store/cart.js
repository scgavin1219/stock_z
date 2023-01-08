
export const ADD_ITEM = "cart/ADD_ITEM"
export const REMOVE_ITEM = "cart/REMOVE_ITEM"
export const REMOVE_ITEMS = "cart/REMOVE_ITEMS"

export const addItem = listingId => ({ 
    type: ADD_ITEM,
    listingId 
})

export const removeItem = listingId => ({
    type: REMOVE_ITEM,
    listingId
})

export const removeItems = () => ({
    type: REMOVE_ITEMS
})






const cartReducer = (state = {}, action) => { 
    const newState = {...state}
    switch (action.type) { 
        case ADD_ITEM: 
            return {...newState, [action.listingId]: action.listingId} 
        case REMOVE_ITEM:
            delete newState[action.listingId]
            return newState
        case REMOVE_ITEMS: 
            return {}
        default: 
            return state
    }
}


export default cartReducer
