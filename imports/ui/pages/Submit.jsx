import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import {FlowRouter} from 'meteor/kadira:flow-router'
import { Button, Checkbox, Form } from 'stardust'

import { Memes } from '../../api/Memes.js';

export default class Submit extends Component {
    constructor(){
        super(...arguments);
    }

    randomString(length) {
        return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
    }

    handleSubmit(e, serializedForm) {

        this.setState({ serializedForm });

        e.preventDefault();

        // Find the text field via the React ref
        const name = ReactDOM.findDOMNode(this.refs.name).value.trim();
        const content = ReactDOM.findDOMNode(this.refs.content).value.trim();

        Memes.insert({
            name,
            content,
            memeId: this.randomString(10),
            createdAt: new Date(), // current time
        });

        FlowRouter.go('/');
    }

    render() {
        return (
            <div>
                <h1>Submit</h1>

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        type="text"
                        className="ui input"
                        ref="name"
                        placeholder="Name"
                    />
                    <br/><br/><br/><br/>
                    <input
                        type="text"
                        className="ui input"
                        ref="content"
                        placeholder="Meme content goes here.."
                    />
                    <br/><br/><br/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}