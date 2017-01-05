import { Route, IndexRoute } from 'react-router';
import App from './containers/app.js';
import Home from './containers/home.js';
import {APP_WEB_BASE_PATH} from './env.js';

const routes = (
    <Route path={`${APP_WEB_BASE_PATH||'/'}`} component={App} >
        <IndexRoute component={Home} />
        <Route path="/:name" component={Home} />
    </Route>
);

export default routes;
