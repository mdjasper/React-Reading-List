# React/Redux Demo Application

This React Reading List was created to demonstrate building a simple but
realistic react/redux application using the react starter.

## Deploying to Cloudfoundry

# Status

This app has one instance called production that is manually (command line)
deployed to cloudfoundry. It does not build in Anthill.

See the following files for deployment information...
* `.cfignore` for files that are not pushed to cloudfoundry
* `.env` for environment variables that are used when running locally
* `manifests/*` for deployment and environment properties

Confidential information like usernames and passwords should be set into the
environment directly in cloudfoundry using either the ui or the cli, and of
course documented somewhere. It should not be put into source files that end
up in git.

### Deploy
1. run `npm run build`
1. `cf login` to cloudfoundry and set your org and space (ESM, openweb-prod)
1. run `npm run deploy:prod`

# About the starter
A project starter for universalmorphic React/Redux apps


## Features

*   [React](https://facebook.github.io/react/): THE component-based view library.
*   [Redux](http://redux.js.org/): application state management
*   [React-Redux Official Bindings](https://github.com/reactjs/react-redux): remove the boilerplate code when connecting React to Redux
*   [React Router](https://github.com/reactjs/react-router): server/client side application router
*   [Redux Thunk](https://github.com/gaearon/redux-thunk): easier async and sequential actions.
*   [React Helmet](https://github.com/nfl/react-helmet): title and meta tags FTW
*   [ExpressJS](http://expressjs.com/): server-side app framework.
*   [WebPack](https://webpack.github.io/): module bundler.
*   [PostCSS](https://github.com/postcss/postcss): CSS transformations via JS
*   [CSS Modules](https://github.com/css-modules/css-modules): private name spaces for css classes.
*   [CSSNext](http://cssnext.io/): future CSS today.
*   [React StoryBook](https://github.com/kadirahq/react-storybook): a component authoring sandbox. also component functional testing .
*   [Enzyme](https://github.com/airbnb/enzyme) & [Tape](https://github.com/substack/tape): unit testing
*   [Eslint](http://eslint.org/): JS linting.


## Development

1.  first, run `npm i` to install dependencies
1.  to start the component dev environment, run `npm run components`
1.  to start the application dev environment, run `npm run dev`
1.  to lint the JS, run `npm run lint`
1.  build the production app via `npm run build`
1.  start the app via `npm start`


## Files

1.  The React / Redux app is found in [src/app](./src/app)
1.  The production Express.js server is found in [src/server](./src/server)
1.  Component stories (for the component dev environment) is found in [.storybook/config.js](./.storybook/config.js)



NOTE: Make sure you are using npm version 3 or higher.
