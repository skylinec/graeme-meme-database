import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import AccountsUIWrapper from '../AccountsUIWrapper.jsx';

import { Header } from 'stardust';

export default class App extends Component {
    constructor(){
        super(...arguments);
    }

    render() {
        return (
            <div>
                <Sidebar/>
                <AccountsUIWrapper />
                {this.props.content}
            </div>
        )
    }
}