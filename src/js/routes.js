import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Greet from './components/greeting';

export default (
  <Route path="/" component={App}>
    <Route path="greet" component={Greet} />
  </Route>
);
