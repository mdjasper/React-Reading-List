export const ADD_BOOK = 'ADD_BOOK';

export default (state = [], action) => {
    switch(action.type) {
        case ADD_BOOK:
            return [
                {
                    read: false,
                    ...action.book
                },
                ...state];
        default:
            return state;
    }
}
