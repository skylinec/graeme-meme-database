import React, { Component, PropTypes } from 'react';
import Meme from '../components/home/Meme';
import { createContainer } from 'meteor/react-meteor-data';

import { Memes } from '../../api/Memes.js';

export default class MemeView extends Component {
    constructor(){
        super(...arguments);
    }

    render() {
        return (
            <div>
                <MainJumbotron/>

                <ul>
                    {this.props.yield}
                </ul>
            </div>
        )
    }
}

Meme.propTypes = {
    memes: PropTypes.array.isRequired
};

export default createContainer(() => {
    return {
        memes: Memes.find({ key: this.props.key }).fetch(),
    };
}, MemeView)