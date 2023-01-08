
export const ADD_ITEM = "cart/ADD_ITEM"
export const REMOVE_ITEM = "cart/REMOVE_ITEM"
export const REMOVE_ITEMS = "cart/REMOVE_ITEMS"

const addItem = itemId => ({ 
    type: ADD_ITEM,
    itemId 
})

const removeItem = itemId => ({
    type: REMOVE_ITEM,
    itemId
})

const removeItems = () => ({
    type: REMOVE_ITEMS
})



const cartReducer = (state = {}, action) => { 
    const newState = {...state}
    switch (action.type) { 
        case ADD_ITEM: 
            return newState[action.itemId] = {id: action.produceId, count: 1 } 
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
