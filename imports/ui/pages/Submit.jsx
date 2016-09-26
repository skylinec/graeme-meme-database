import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'

import { Memes } from '../../api/Memes.js';

export default class Submit extends Component {
    constructor(){
        super(...arguments);
    }

    randomString(length) {
        return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
    }

    handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        const name = ReactDOM.findDOMNode(this.refs.name).value.trim();

        Memes.insert({
            name,
            memeId: this.randomString(10),
            createdAt: new Date(), // current time
        });

        // Clear form
        ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }

    render() {
        return (
            <div>
                <h1>Submit</h1>
                <form class="ui input" onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        type="text"
                        className="ui input"
                        ref="name"
                        placeholder="Name"
                    />
                    <br/>
                    <input
                        type="text"
                        className="ui input"
                        ref="name"
                        placeholder="Meme content goes here.."
                    />
                </form>
            </div>
        )
    }
}