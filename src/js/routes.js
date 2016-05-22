import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import PostIndex from './components/post_index';
import PostsNew from './components/post_new';
import PostShow from './components/post_show';
import NoComp from './components/no-page';

export default (
  <Route path="/" component={App}>
    <IndexRoute title="This is the list title" component={PostIndex} />
    <Route path="posts" title="This is the list title" component={PostIndex} />
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostShow} />
    <Route path="/*" component={NoComp} />
  </Route>
);

// with path="posts/:id" react-router pass this to our component:
// this.props.params.id, basically anything the we pass on the path with ':' makes
// react router create a equivalent property on props.params
