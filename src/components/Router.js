import React from 'react';
import {BrowserRouter as Router, Route, Switch } from react-router-dom;

import Month from './Month';
import Year from './Year';

const Router = ()=> (
    <Router>
        <Switch>
            <Route exact path='/' component={Year}/>
            <Route  path='/month' component={Month}/>
        </Switch>
    </Router>
)

export default Router;