import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';

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
                    <li className="item"><IndexLink to="/" activeClassName="active">Index</IndexLink></li>
                    <li className="item"><Link to="/one" activeClassName="active">Page One</Link></li>
                    <li className="item"><Link to="/two" activeClassName="active">Page Two</Link></li>
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

