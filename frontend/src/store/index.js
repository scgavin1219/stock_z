import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import session from './session';
import listingReducer from './listings'; 
import reviewsReducer from './reviews';
import cartReducer from './cart';
import favoritesReducer from './favorite';

const rootReducer = combineReducers ({
    session,
    listings: listingReducer,
    reviews: reviewsReducer,
    cart: cartReducer,
    favorites: favoritesReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => { 
    return createStore(rootReducer, preloadedState, enhancer)
}

export default configureStore;