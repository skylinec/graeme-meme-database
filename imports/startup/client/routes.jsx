import {FlowRouter} from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

import App from '../../ui/layouts/App'

import Meme from '../../ui/components/home/Meme'

import Home from '../../ui/pages/Home'
import Submit from '../../ui/pages/Submit'
import About from '../../ui/pages/About'
import MemeView from '../../ui/pages/MemeView'

FlowRouter.route('/', {
    name: 'homepage',
    action() {
        mount(App, {
            content: <Home />
        })
    }
});

FlowRouter.route('/meme/:id', {
    name: 'memeView',
    action(params) {
        mount(App, {
            content: <MemeView memeId={params.id}/>
        });
    }
});

FlowRouter.route('/submit', {
    name: 'submit',
    action() {
        mount(App, {
            content: <Submit />
        })
    }
});

FlowRouter.route('/about', {
    name: 'about',
    action() {
        mount(App, {
            content: <About />
        })
    }
});