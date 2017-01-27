import test from 'tape';
import { addBook, removeBook } from './bookSearch.js';
import { ADD_BOOK, REMOVE_BOOK } from '../reducers/ReadingList.js';

test('Actions bookSearch test', t => {

    t.deepEqual(addBook('Enders Game'), {type: ADD_BOOK, book: 'Enders Game'}, 'addBook action');

    t.deepEqual(removeBook('Enders Game'), {type: REMOVE_BOOK, id: 'Enders Game'}, 'removeBook action');

    t.end();
});
