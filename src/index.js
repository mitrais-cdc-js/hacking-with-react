import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Detail from './pages/Detail';
import List from './pages/List';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={List} />
        <Route path="/detail/:repo" component={Detail} />
    </Router>,
    document.getElementById('app')
);