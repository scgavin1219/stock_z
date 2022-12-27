import csrfFetch, { storeCSRFToken } from "./csrf"


export const CREATE_SESSION = 'session/CREATE_SESSION'
export const REMOVE_SESSION = 'session/REMOVE_SESSION'

export const createSession = (user) => ({ 
    type: CREATE_SESSION,
    payload: user
})

export const removeSession = () =>  ({ 
    type: REMOVE_SESSION
})

export const login = (user) => async dispatch => { 
    const { credential, password } = user;
    const res = await csrfFetch('/api/session', { 
        method: "POST",
        body: JSON.stringify({
            credential,
            password
        })
    });
    if (res.ok) { 
        const data = await res.json();
        storeCurrentUser(data.user)
        dispatch(createSession(data.user));
        return res;
    }
}

export const logout = (user) => async dispatch => { 
    const res = await csrfFetch(`/api/session`, { 
        method: "DELETE"
    })
    if (res.ok) { 
        storeCurrentUser(null)
        dispatch(removeSession())
        return res
    }
}

export const signup = (user) => async dispatch => { 
    const { username, password, email } = user;
    const res = await csrfFetch(`/api/users`, {
        method: "POST",
        body: JSON.stringify({
            username, 
            email, 
            password
        })
    })
    if (res.ok) {
        const data = await res.json();
        storeCurrentUser(data.user)
        dispatch(createSession(data.user));
        return res
    }
}

export const restoreSession = () => async dispatch => { 
    const res = await csrfFetch(`/api/session`)
    storeCSRFToken(res)
    const data = await res.json()
    storeCurrentUser(data.user)
    dispatch(createSession(data.user))
    return res
}

const storeCurrentUser = (user) => { 
    if (user) { 
        sessionStorage.setItem("currentUser", JSON.stringify(user))
    } else { 
        sessionStorage.removeItem("currentUser")
    }
}

const initialState = { 
    user: JSON.parse(sessionStorage.getItem("currentUser")) 
};

const sessionReducer = (state = initialState, action) => { 
    Object.freeze(state)
    const newState = {...state}

    switch (action.type) { 
        case CREATE_SESSION:
            // return {...newState, [action.payload.user.id]: action.payload.user}
            return {...newState, user: action.payload }
        case REMOVE_SESSION: 
            // delete newState[action.userId];
            // return newState;
            return {...state, user: null };
        default: 
            return state;
    }
}

export default sessionReducer;