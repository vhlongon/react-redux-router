import React, {Component, PropTypes} from 'react';

class PostShow extends React.Component {

  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div>Show Post {this.props.params.id}</div>
    );
  }
}

export default PostShow;
