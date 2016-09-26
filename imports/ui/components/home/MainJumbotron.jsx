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
                            <p>Post the dankest memes.</p>
                            <br></br>
                            <a className="ui blue button" href="/submit">Submit Yours</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}