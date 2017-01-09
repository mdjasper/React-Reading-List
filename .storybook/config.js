import { configure } from '@kadira/storybook';

function loadStories() {
    require('../src/app/components/BookTile/BookTile.story.js');
    require('../src/app/components/BookList/BookList.story.js');
    require('../src/app/components/Greeting/Greeting.story.js');
    require('../src/app/components/BookSearch/BookSearch.story.js');
}

configure(loadStories, module);
