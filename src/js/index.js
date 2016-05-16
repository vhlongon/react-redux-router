//core dependencies
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// redux specific stuff to create a provider and store
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//without router - import the component
// import App from './components/app';

//use routher instead of importing the App
import{Router, hashHistory} from 'react-router';

//import the file we create defining all the different routes:
// which component to render depending on the url typed on the browser
import routes from './routes';

//import the reducers
import reducers from './reducers';

//import your styles
import css from '../scss/styles.scss';

//create middleware

const createStoreWithMiddleware = applyMiddleware()(createStore);

// Renader the app by wrapping the component in a provider
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.querySelector('.react-root')
);
