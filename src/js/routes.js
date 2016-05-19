import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import PostIndex from './components/post_index';
import PostsNew from './components/post_new';
import NoComp from './components/no-page';

export default (
  <Route path="/" component={App}>
    <IndexRoute title="This is the list title" component={PostIndex} />
    <Route path="posts" title="This is the list title" component={PostIndex} />
    <Route path="posts/new" component={PostsNew} />
    <Route path="/*" component={NoComp} />
  </Route>
);
