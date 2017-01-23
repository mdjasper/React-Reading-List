import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import isBrowser from 'is-in-browser';
import readingList, * as fromReadingList from './reducers/readingList.js';
import greeting from './reducers/greeting.js';
import recommendations from './reducers/recommendations.js';

import {ALLOW_REDUX_DEV_TOOLS} from './env.js';

import system, * as fromSystem from './reducers/system.js';

// create the master reducer
const rootReducer = combineReducers({readingList, system, greeting, recommendations});

export const selectHTTPResponseCode = (state) => (
    fromSystem.selectHTTPResponseCode(state.system)
);

// determine initial state
const initialState = isBrowser && window.__INITIAL_STATE__ || {};


const reduxMiddleware = compose(
    applyMiddleware(thunk),
    isBrowser && ALLOW_REDUX_DEV_TOOLS==="1" && typeof window.devToolsExtension !== "undefined" ? window.devToolsExtension() : f => f
);

// export a store creator factory with initial state if present...
export default () => createStore( rootReducer, initialState, reduxMiddleware );

// selectors
export const selectOrderedBooks = state =>
    fromReadingList.selectOrderedBooks(state.readingList);
