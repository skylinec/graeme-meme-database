import React, { Component, PropTypes } from 'react';
import MainJumbotron from '../components/home/MainJumbotron';
import Meme from '../components/home/Meme';
import { createContainer } from 'meteor/react-meteor-data';

import { Memes } from '../../api/Memes.js';

export default class Home extends Component {
    constructor(){
        super(...arguments);
    }

    renderMemes() {
        return this.props.memes.map((meme) => (
            <Meme key={meme._id} memeId={meme.memeId} meme={meme}/>
        ));
    }

    render() {
        return (
            <div>
                <MainJumbotron/>

                <ul>
                    {this.renderMemes()}
                </ul>
            </div>
        )
    }
}

Home.propTypes = {
    meme: PropTypes.array.isRequired
};

export default createContainer(() => {
    return {
        memes: Memes.find({}).fetch(),
    };
}, Home)