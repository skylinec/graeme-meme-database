import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import { App } from '../../ui/layouts/App';
import { Home } from '../../ui/components/pages/Home';

import { Submit } from '../../ui/components/pages/Submit';
import { About } from '../../ui/components/pages/About';

Meteor.startup( () => {
    ReactDOM.render ((
                <Router history={ hashHistory }>
                    <Route path="/" component={ App }>
                        <IndexRoute component={ Home } />
                        <Route path="/submit" component={ Submit } />
                        <Route path="/about" component={ About } />
                    </Route>
                </Router>
    ), document.getElementById('render-target'));
});