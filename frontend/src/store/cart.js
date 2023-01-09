import csrfFetch from './csrf'


export const ADD_ITEM = "cart/ADD_ITEM"
export const REMOVE_ITEM = "cart/REMOVE_ITEM"
export const REMOVE_ITEMS = "cart/REMOVE_ITEMS"
export const ADD_ITEMS = "cart/ADD_ITEMS"

export const addItem = listingId => ({ 
    type: ADD_ITEM,
    listingId 
})

export const addItems = items => ({
    type: ADD_ITEMS,
    items
})

export const removeItem = listingId => ({
    type: REMOVE_ITEM,
    listingId
})

export const removeItems = () => ({
    type: REMOVE_ITEMS
})

export const getItems = store => { 
    return store.cart ? Object.values(store.cart) : []
}

export const getItem = itemId => store => { 
    return (store.cart && store.cart[itemId]) ? store.cart[itemId] : null 
}

export const fetchItems = () => async dispatch => { 
    const res = await csrfFetch(`/api/cart`)
    if (res.ok) { 
        const items = await res.json();
        dispatch(addItems(items))
    }
}

export const fetchItem = (itemId) => async dispatch => { 
    const res = await csrfFetch(`/api/cart/${itemId}`)
    if (res.ok) { 
        const item = await res.json();
        dispatch(addItem(item.id))
    }
}

export const createCartItem = (cartItem) => async dispatch => { 
    const res = await csrfFetch(`api/cart`, { 
        method: "POST",
        body: JSON.stringify(cartItem),
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    if (res.ok) { 
        const newCartItem = await res.json();
        dispatch(addItem(newCartItem))
    }
}

export const deleteCartItem = (itemId) => async dispatch => { 
    const res = await csrfFetch(`/api/cart/${itemId}`, { 
        method: "DELETE"
    })
    if (res.ok) dispatch(removeItem(itemId))
}












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
