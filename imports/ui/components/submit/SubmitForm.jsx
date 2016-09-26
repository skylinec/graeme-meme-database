import React, { Component, PropTypes } from 'react';

export default class Meme extends Component {

    render() {
        return (
            <div className="ui raised very padded text container segment">
                <a href={this.getHREF()}><p className="ui title"><b>{this.props.meme.name}</b></p></a>
                <p>{this.props.meme.content}</p>
                <i>{this.props.memeId} - {this.props.createdAt}</i>
            </div>
        )
    }
}

Meme.propTypes = {
    meme: PropTypes.object.isRequired
};