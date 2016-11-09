import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Detail from './pages/Detail';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Detail} />
    </Router>,
    document.getElementById('app')
);