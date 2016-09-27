import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Comment from './Comment';
import AddComment from './AddComment';

import {FlowRouter} from 'meteor/kadira:flow-router'

import { Memes } from '../../../api/Memes.js';
import { CommentsCollection } from '../../../api/Memes';

export default class Comments extends Component {

    componentDidMount() {
        document.scrollToTop();
    }

    constructor(){
        super(...arguments);
    }

    renderComment() {
        return this.props.comments.map((comment) => (
            <Comment key={comment._id} comment={comment}/>
        ));
    }

    getId() {
        return FlowRouter.getParam("id")
    }

    render() {
        return (
            <div className="ui segment container very padded">
                <h1>Comments</h1>
                <ul>
                    <AddComment memeId={this.getId()}/>
                    <br/><br/>
                    { this.props.comments ?  <div>{this.renderComment()}</div> : <b>NO COMMENT</b> }
                </ul>
            </div>
        )
    }
}

export default createContainer(() => {
    return {
        comments: CommentsCollection.find({memeId: FlowRouter.getParam("id")}, {sort: { createdAt: -1 }}).fetch(),
        currentUser: Meteor.user(),
    };
}, Comments)