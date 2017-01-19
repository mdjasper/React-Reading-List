import { storiesOf, action } from '@kadira/storybook'
import { BookSearch } from './BookSearch.js'

storiesOf('BookSearch')
    .add('default', () => (
        <BookSearch onSearch={action('hello from bruce')} />
    ))
//onSearch={action('bruce')}
//<BookSearch onSearch={() => console.log('hello from bruce')} />
