import React, { Component, PropTypes } from 'react';
import Meme from '../components/home/Meme';
import { createContainer } from 'meteor/react-meteor-data';

import {FlowRouter} from 'meteor/kadira:flow-router'

import { Memes } from '../../api/Memes.js';

export default class MemeView extends Component {

    componentDidMount() {
        document.scrollToTop();
    }

    constructor(){
        super(...arguments);
    }

    renderMeme() {
        return this.props.memes.map((meme) => (
            <Meme key={meme._id} memeId={meme.memeId} meme={meme}/>
        ));
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderMeme()}
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
        memes: Memes.find({ memeId: FlowRouter.getParam("id") }).fetch()
    };
}, MemeView)