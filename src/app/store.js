import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import isBrowser from 'is-in-browser';
import readingList, * as fromReadingList from './reducers/ReadingList.js';
import greeting, * as fromGreeting from './reducers/greeting.js';
import recommendations, * as fromRecommendations from './reducers/recommendations.js';

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

export const selectGreetingVisible = state =>
    fromGreeting.selectVisible(state.greeting);

export const selectRecommendations = state =>
    fromRecommendations.selectRecommendations(state.recommendations);
