import React, { Component, PropTypes } from 'react';

import { Header } from 'stardust';

export default class Sidebar extends Component {

    constructor(){
        super(...arguments);
    };

    componentDidMount() {
        $('.ui.sidebar').sidebar({
            transition: 'overlay'
        });
    };

    toggleSidebar() {
        $(".ui.sidebar").sidebar("toggle");
    };

    render() {

        return (
            <div id="layout">
                <div className="ui inverted left vertical sidebar menu">
                    <li className="item">Index</li>
                    <li className="item">Submit</li>
                    <li className="item">About</li>
                </div>
                <div className="pusher">
                    <div className="ui top fixed menu">
                        <a className="item" onClick={this.toggleSidebar}>
                            <i className="sidebar icon"></i>
                        </a>
                    </div>
                    <div className="ui segment">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

