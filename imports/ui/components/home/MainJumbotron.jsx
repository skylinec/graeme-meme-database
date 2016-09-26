import React, { Component, PropTypes } from 'react';

import { Header } from 'stardust';

export default class MainJumbotron extends Component {
    render() {
        return (
            <div className="ui grid">
                <div className="row">
                    <div className="column padding-reset">
                        <div className="ui huge message page grid">
                            <h1 className="ui huge header">Graeme Meme Database</h1>
                            <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                            <a className="ui blue button" href="/submit">Submit Yours</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}