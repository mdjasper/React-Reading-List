import { search as queryBooks } from '../services/bookSearch.js';
import { ADD_BOOK, REMOVE_BOOK } from '../reducers/ReadingList.js';

// action creator
export const addBook = book => ({
    type: ADD_BOOK,
    book
});

export const removeBook = id => ({
    type: REMOVE_BOOK,
    id
});

export const search = (query) => dispatch  => {
    return queryBooks(query)
        .then(
            res => {
                if(res.items && res.items.length > 0) {
                    // dispatch the first query result
                    dispatch(addBook(res.items[0]));
                }
            }
        )
        .catch( reason => {
            // TODO dispatch something that notifies the user
            return Promise.reject('unable to dispatch book ', reason);

        })
};
