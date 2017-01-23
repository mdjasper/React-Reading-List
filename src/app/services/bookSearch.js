import {GOOGLE_BOOKS_API} from '../env.js';

export const search = (q) => (
    fetch(`${GOOGLE_BOOKS_API}/volumes?q=title:${q}`)
        .then(response => response.ok ? response.json() : Promise.reject(response))
)
