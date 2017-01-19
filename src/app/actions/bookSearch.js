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
                dispatch(addBook(normalize(res.items[0])));
            } catch (e){
                // TODO handle this properly - dispatch an action that shows the user a message about the failure
                console.log('search response was: ', res);
                console.log('failed to dispatch book', e);
            }
        }
    )
};

// isolate the ISBN and thumbnail URL
export const normalize = (book) => {
    try {
        return {
            author: getAuthor(book.volumeInfo),
            isbn: getIsbn(book.volumeInfo.industryIdentifiers) || book.id,
            thumbnailUrl: getThumbnailUrl(book.volumeInfo.imageLinks),
            ...book
        }
    } catch (e) {
        console.log('failed to normalize book: ', book);
        throw e; // pass the error up the chain
    }
};

export const getAuthor = (volumeInfo) => {
    console.log('bc: volumeInfo', volumeInfo);
    return volumeInfo.authors
              ? volumeInfo.authors[0]
              : volumeInfo.publisher
                    ? volumeInfo.publisher
                    : "unknown author"
}

export const getIsbn = (identifiers) => {
    if (!identifiers) return undefined;
    const isbn13 = identifiers.filter( (i) => i.type === "ISBN_13" );
    const isbn10 = identifiers.filter( (i) => i.type === "ISBN_10" );
    const other = identifiers[0]; // when all else fails
    return isbn13.length > 0 ? isbn13[0].identifier
                  : ( isbn10.length > 0 ? isbn10[0].identifier
                             : (other ? other.identifier
                                      : undefined));
}

export const getThumbnailUrl = (imageLinks) => {
    if (!imageLinks) return undefined;
    return imageLinks.smallThumbnail || imageLinks.thumbnail;
}
