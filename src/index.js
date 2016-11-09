import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './pages/App';
import Detail from './pages/Detail';
import List from './pages/List';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={ App }>
            <IndexRoute component={ List } />
            <Route path="/detail/:repo" component={ Detail } />
        </Route>
    </Router>,
    document.getElementById('app')
);