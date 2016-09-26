import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '../imports/startup/accounts-config';
import '../imports/startup/client/index.jsx';
import '../imports/startup/client/routes.jsx';

import App from '../imports/ui/layouts/App.jsx';

Meteor.startup(() => {
    // render(<App />, document.getElementById('render-target'))
})