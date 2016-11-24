import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import Detail from './pages/Detail';
import List from './pages/List';
import User from './pages/User';

const NotFound = () => <span>404.. This page is not found!</span>;

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={List} />
    <Route path="detail/:repo" component={Detail} />
    <Route path="user/:user" component={User} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
