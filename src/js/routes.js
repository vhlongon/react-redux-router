import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import PostIndex from './components/post_index';
import NoComp from './components/no-page';

export default (
  <Route path="/" component={App}>
    <IndexRoute title="This is the list title" component={PostIndex} />
    <Route path="posts" title="This is the list title" component={PostIndex} />
    <Route path="/*" component={NoComp} />
  </Route>
);
