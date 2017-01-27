import { TOGGLE_READ } from '../reducers/readingList';

export const toggleRead = (id) => ({
    type: TOGGLE_READ,
    id
})
