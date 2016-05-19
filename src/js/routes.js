import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Home from './components/home';
import List from './components/list';
import Greet from './components/greeting';
import NoComp from './components/no-page';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="list" component={List} />
    <Route path="greet" component={Greet} />
    <Route path="/*" component={NoComp} />
  </Route>
);
