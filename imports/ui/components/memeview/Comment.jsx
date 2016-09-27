import React, { Component, PropTypes } from 'react';
import { CommentsCollection } from '../../../api/Memes';
import { Meteor } from 'meteor/meteor';

export default class Comment extends Component {

    deleteThisComment() {
        Meteor.call('comments.delete', Meteor.user().username.toString(), this.props.comment.owner, this.props.comment._id)
    }

    render() {
        return (
            <div className="ui raised very padded text container segment">
                <p className="ui title"><b>{this.props.comment.owner}</b></p>
                <p>{this.props.comment.content}</p>
                <i>{this.props.comment.createdAt.toString()}</i>
                <br/>
                {(this.props.comment.owner == Meteor.user().username.toString()) ? <button className="ui button" onClick={this.deleteThisComment.bind(this)}>
                    &times;
                </button> : ""}
            </div>
        )
    }
}

Comment.propTypes = {
    comment: PropTypes.object.isRequired
};