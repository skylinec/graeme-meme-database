import {FlowRouter} from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

import App from '../../ui/layouts/App'
import Home from '../../ui/pages/Home'

FlowRouter.route('/', {
    name: 'homepage',
    action() {
        mount(App, {
            content: <Home />
        })
    }
})