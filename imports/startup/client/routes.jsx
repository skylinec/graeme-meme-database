import {FlowRouter} from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

import App from '../../ui/layouts/App'

import Home from '../../ui/pages/Home'
import Submit from '../../ui/pages/Submit'
import About from '../../ui/pages/About'

FlowRouter.route('/', {
    name: 'homepage',
    action() {
        mount(App, {
            content: <Home />
        })
    }
});

FlowRouter.route('/submit', {
    name: 'homepage',
    action() {
        mount(App, {
            content: <Submit />
        })
    }
});

FlowRouter.route('/about', {
    name: 'homepage',
    action() {
        mount(App, {
            content: <About />
        })
    }
});