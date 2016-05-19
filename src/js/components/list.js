import React from 'react';
import { Component } from 'react';

import ItemsList from '../containers/items-list';
import ItemDetail from '../containers/item-details';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.route.title}</h1>
        <ItemsList />
        <ItemDetail />
      </div>
    );
  }
}
