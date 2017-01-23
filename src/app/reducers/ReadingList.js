import { combineReducers } from 'redux';

// action constants
export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

// reducers
const books = (state = {}, action) => {
    switch(action.type) {
        case ADD_BOOK:
            return {
                ...state,
                [action.book.id]: {
                    read: false,
                    ...action.book
                }
            }
        case REMOVE_BOOK:
            return delete (Object.assign({}, state))[action.id]
        default:
            return state;
    }
}

const order = (state = [], action) => {
    switch(action.type) {
        case ADD_BOOK:
            return [
                action.book.id,
                ... state
            ]
        case REMOVE_BOOK:
            return state.filter((id) => action.id !== id )
    }
    return state;
}

export default combineReducers({books, order});

// selectors
export const selectOrderedBooks = ({books, order}) => order.map((id) => books[id]);
