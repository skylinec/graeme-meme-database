import React, { Component, PropTypes } from 'react';

export default class Comment extends Component {

    render() {
        return (
            <div className="ui raised very padded text container segment">
                <p className="ui title"><b>{this.props.comment.owner}</b></p>
                <p>{this.props.comment.content}</p>
                <i>{this.props.comment.createdAt.toString()}</i>
            </div>
        )
    }
}

Comment.propTypes = {
    meme: PropTypes.object.isRequired
};