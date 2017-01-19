import {GOOGLE_BOOKS_API} from '../env.js';

// TODO q should be made url safe including encoding spaces and ???
// TODO should the title part of the url vary? for ISBN? can we search other things?
// https://www.googleapis.com/books/v1/volumes?q=title:snow%20crash
export const search = (q) => (
    fetch(`${GOOGLE_BOOKS_API}/volumes?q=title:${q}`)
        .then(response => response.ok ? response.json() : Promise.reject(response))
)
