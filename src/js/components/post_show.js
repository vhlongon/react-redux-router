import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/index';

class PostShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    this.props.fetchPost(this.props.params.id);
  }

  render = () => {
    if(!this.props.post) {
      return <div>loading...</div>;
    }
    const {title, categories, content} = this.props.post;

    return (
      <div className="post">
        <h3>{title}</h3>
        <h6>Categories: {categories}</h6>
        <p>{content}</p>
      </div>
    );
  }
}

function MapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(MapStateToProps, {fetchPost})(PostShow);
