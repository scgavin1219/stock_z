import csrfFetch from './csrf'


export const ADD_ITEM = "cart/ADD_ITEM"
export const REMOVE_ITEM = "cart/REMOVE_ITEM"
export const REMOVE_ITEMS = "cart/REMOVE_ITEMS"
export const ADD_ITEMS = "cart/ADD_ITEMS"

export const addItem = item => ({ 
    type: ADD_ITEM,
    item 
})

export const addItems = items => ({
    type: ADD_ITEMS,
    items
})

export const removeItem = itemId => ({
    type: REMOVE_ITEM,
    itemId
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
    const res = await csrfFetch(`/api/carts`)
    if (res.ok) { 
        const items = await res.json();
        dispatch(addItems(items))
    }
}

export const fetchItem = (itemId) => async dispatch => { 
    const res = await csrfFetch(`/api/carts/${itemId}`)
    if (res.ok) { 
        const item = await res.json();
        dispatch(addItem(item.id))
    }
}

export const createCartItem = (cart) => async dispatch => { 
    const res = await csrfFetch(`/api/carts`, { 
        method: "POST",
        body: JSON.stringify({cart}),
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

export const updateCartItem = (cart) => async dispatch => { 
    const res = await csrfFetch(`/api/carts/${cart.id}`, { 
        method: "PUT",
        body: JSON.stringify({cart}),
        headers: { 
            "Content-Type": "application/json",
            "Accept": "appliation/json"
        }
    })
    const updatedCart = await res.json();
    dispatch(addItem(updatedCart))
}

export const deleteCartItem = (itemId) => async dispatch => { 
    const res = await csrfFetch(`/api/carts/${itemId}`, { 
        method: "DELETE"
    })
    if (res.ok) dispatch(removeItem(itemId))
}




const cartReducer = (state = {}, action) => { 
    const newState = {...state}
    switch (action.type) { 
        case ADD_ITEM: 
            return {...newState, [action.item.id]: action.item }
        case ADD_ITEMS: 
            return {...action.items} 
        case REMOVE_ITEM:
            delete newState[action.itemId]
            return newState
        case REMOVE_ITEMS: 
            return {}
        default: 
            return state
    }
}


export default cartReducer
