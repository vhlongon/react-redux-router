import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import PostIndex from './components/post_index';
import List from './components/list';
import Greet from './components/greeting';
import NoComp from './components/no-page';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostIndex} />
    <Route path="list" title="This is the list title" component={List} />
    <Route path="greet" component={Greet} />
    <Route path="/*" component={NoComp} />
  </Route>
);
