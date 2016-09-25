import React, { Component, PropTypes } from 'react';

export default class Meme extends Component {
    render() {
        return (
            <div class="ui raised very padded text container segment">
                <li class="ui title">{this.props.meme.name}</li>
                <a href="{this.props.meme.link}">{this.props.meme.link}</a>
            </div>
        )
    }
}