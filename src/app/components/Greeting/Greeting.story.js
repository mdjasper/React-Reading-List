import { storiesOf, action } from '@kadira/storybook'
import Greeting from './Greeting.js'

storiesOf('Greeting', module)
    .add('default', () => (
        <Greeting />
    ))
    .add('noone', () => (
        <Greeting close={action('close noone')}/>
    ))
    .add('someone', () => (
        <Greeting name="Bruce" close={action('close Bruce')}/>
    )
);
