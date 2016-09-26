import React, { Component, PropTypes } from 'react';

export default class Meme extends Component {

    getHREF() {
        return "/meme/" + this.props.memeId;
    }

    render() {
        return (
            <div className="ui raised very padded text container segment">
                <a href={this.getHREF()}><p className="ui title"><b>{this.props.meme.name}</b></p></a>
                <p>{this.props.meme.content}</p>
                <i>{this.props.memeId} - {this.props.createdAt}</i>
                <b>{this.props.meme.username}</b>
            </div>
        )
    }
}

Meme.propTypes = {
    meme: PropTypes.object.isRequired
};