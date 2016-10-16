//core dependencies
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// redux specific stuff to create a provider and store
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

//without router - import the component
// import App from './components/app';

//use routher instead of importing the App
import{Router, browserHistory} from 'react-router';

//import the file we create defining all the different routes:
// which component to render depending on the url typed on the browser
import routes from './routes';

//import the reducers
import reducers from './reducers';


//import redux-promise to use as middleware
import promise from 'redux-promise';

//import your styles
import css from '../scss/styles.scss';

//create middleware

const createStoreWithMiddleware = applyMiddleware(thunk, promise)(createStore);

// Renader the app by wrapping the component in a provider
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.querySelector('.react-root')
);
