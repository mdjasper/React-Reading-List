import { TOGGLE_READ } from '../reducers/ReadingList';

export const toggleRead = (id) => ({
    type: TOGGLE_READ,
    id
})
