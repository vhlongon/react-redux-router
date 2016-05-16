import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';


// for the purporse of testing just create a dummy component here
const Greeting = () => {
  return <div>Yo, mista!</div>;
};

export default (
  <Route path="/" component={App}>
    <Route path="greet" component={Greeting} />
  </Route>
);
