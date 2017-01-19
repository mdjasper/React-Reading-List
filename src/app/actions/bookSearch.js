import { search as queryBooks } from '../services/bookSearch.js';
import {ADD_BOOK} from '../reducers/readingList.js';

// action creator
export const addBook = book => ({
    type: ADD_BOOK,
    book
});

export const search = (query) => dispatch => {
    return queryBooks(query).then(
        res => {
            try {
                // grab the first query result, normalize it, then dispatch it as an add book action.
                dispatch(addBook(normalize(res.items[0])))
            } catch (e){
                // TODO handle this properly - dispatch an action that shows the user a message about the failure
                console.log("book query failed");
            }
        }
    )
};

// isolate the ISBN and thumbnail URL
export const normalize = (book) => ({
    thumbnailUrl: getThumbnailUrl(book.volumeInfo.imageLinks),
    isbn: getIsbn(book.volumeInfo.industryIdentifiers) || book.id,
    ...book
});

export const getIsbn = (identifiers) => {
    if (!identifiers) return undefined;
    const isbn13 = identifiers.filter( (i) => i.type === "ISBN_13" );
    const isbn10 = identifiers.filter( (i) => i.type === "ISBN_10" );
    return isbn13 ? isbn13[0].identifier : ( isbn10 ? isbn10[0].identifier : undefined);
}

export const getThumbnailUrl = (imageLinks) => {
    if (!imageLinks) return undefined;
    return imageLinks.thumbnail || imageLinks.smallThumbnail;
}
