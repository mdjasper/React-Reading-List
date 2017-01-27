import test from 'tape';
import ReadingListReducer, { ADD_BOOK, REMOVE_BOOK, selectOrderedBooks } from './ReadingList.js';

test('Reducers ReadingList test', t => {

    t.deepEqual(
        ReadingListReducer(undefined, {type: undefined}),
        { books: {}, order: [] },
        'init ReadingList reducer'
    );

    t.deepEqual(
        ReadingListReducer({ books: {}, order: [] }, {type: ADD_BOOK, book: {id: 'Enders Game', foo: 'foo'}}),
        { books: { 'Enders Game': { id: 'Enders Game', read: false, foo: 'foo' } }, order: [ 'Enders Game' ] },
        'ADD_BOOK ReadingList reducer');

    t.end();
});
