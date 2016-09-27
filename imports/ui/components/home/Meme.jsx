import React, { Component, PropTypes } from 'react';
import { Memes } from '../../../api/Memes';
import { Meteor } from 'meteor/meteor';

export default class Meme extends Component {

    getHREF() {
        return "/meme/" + this.props.memeId;
    }

    deleteThisMeme() {
        Meteor.call('memes.delete', Meteor.user().username.toString(), this.props.meme.username, this.props.meme._id)
    }

    render() {
        return (
            <div className="ui raised very padded text container segment">
                <a href={this.getHREF()}><p className="ui title"><b>{this.props.meme.name}</b></p></a>
                <p>{this.props.meme.content}</p>
                <i>{this.props.memeId} - {this.props.comment.createdAt.toString()}</i>
                <b>{this.props.meme.username}</b>
                <br/>
                {(this.props.meme.username == Meteor.user().username.toString()) ? <button className="ui button" onClick={this.deleteThisMeme.bind(this)}>
                    &times;
                </button> : ""}
            </div>
        )
    }
}

Meme.propTypes = {
    meme: PropTypes.object.isRequired
};