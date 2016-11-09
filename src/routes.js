import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import Detail from './pages/Detail';
import List from './pages/List';
import User from './pages/User';

const routes = (
    <Route path="/" component={ App }>
        <IndexRoute component={ List } />
        <Route path="detail/:repo" component={ Detail } />
        <Route path="user/:user" component={ User } />
    </Route>
);

export default routes;