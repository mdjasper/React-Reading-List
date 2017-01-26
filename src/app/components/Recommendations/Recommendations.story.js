import { storiesOf, action } from '@kadira/storybook'
import Recommendations from './Recommendations.js'

const books = [
    {
        title: "Dragons Love Tacos",
        isbn: "0803736800"
    },{
        title: "The Book with No Pictures",
        isbn: "0141361794"
    },{
        title: "The Wonderful Things You Will Be",
        isbn: "0385376715"
    }
]

storiesOf('Recommendations', module)
    .add('default', () => (
        <Recommendations onAdd={action('add book')} books={books} />
    ))
    .add('default repeat', () => (
        <Recommendations onAdd={action('add book')} books={books} repeat />
    ))
;
