import { configure } from '@kadira/storybook';

function loadStories() {
    require('../src/app/components/BookTile/BookTile.story.js');
    require('../src/app/components/BookList/BookList.story.js');
    require('../src/app/components/Greeting/Greeting.story.js');
}

configure(loadStories, module);
