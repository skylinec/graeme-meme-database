import React, { Component, PropTypes } from 'react';
import MainJumbotron from '../components/home/MainJumbotron';

export default class Home extends Component {
    constructor(){
        super(...arguments);
    }

    render() {
        return (
            <div>
                <MainJumbotron/>
            </div>
        )
    }
}