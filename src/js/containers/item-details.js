import React, {Component} from 'react';
import {connect} from 'react-redux';

class ItemDetail extends Component {

  render = () => {
    if(!this.props.item) {
      return <div>Select an Item to get started.</div>;
    }
    return (
      <div>
        <h3>Details for: </h3>
        <div>Title: {this.props.item.title}</div>
        <div>Pages: {this.props.item.type}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    item: state.ActiveItem
  };
}

export default connect(mapStateToProps)(ItemDetail);
