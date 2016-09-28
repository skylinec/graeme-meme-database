import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router'
import { Button, Checkbox, Form } from 'stardust'
import { createContainer } from 'meteor/react-meteor-data';

export default class AddComment extends Component {
    constructor(){
        super(...arguments);
    }

    handleSubmit(e, serializedForm) {

        this.setState({ serializedForm });

        e.preventDefault();

        // Find the text field via the React ref
        const content = ReactDOM.findDOMNode(this.refs.content).value.trim();
        const memeId = this.props.memeId.trim();

        Meteor.call('comments.insert', memeId, content);
        
        ReactDOM.findDOMNode(this.refs.content).value = '';
    }

    render() {
        return (
            <div>
                <h2>Add Comment</h2>

                { this.props.currentUser ?

                    <form className="ui form" onSubmit={this.handleSubmit.bind(this)}>
                        <input type="text" className="field" ref="content" />
                        <input className="ui submit button" type="submit" value="Submit"/>
                    </form> : "YOU FUCKING AREN'T SIGNED IN.. LIKE.. JESUS"

                }

            </div>
        )
    }
}

export default createContainer(() => {
    return {
        currentUser: Meteor.user(),
    };
}, AddComment)
