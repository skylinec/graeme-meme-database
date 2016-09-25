import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';

import { Header } from 'stardust';

export default class App extends Component {
    constructor(){
        super(...arguments);
    }

    render() {
        return (
            <div>
                <Sidebar/>
                { this.props.children }
            </div>
        )
    }
}