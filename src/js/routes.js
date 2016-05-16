import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';

// yoururl.com/ -> renders the App component

export default (
  <Route path="/" component={App} />
);
