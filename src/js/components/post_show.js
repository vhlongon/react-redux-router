import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';
import {Link} from 'react-router';

class PostShow extends React.Component {

  constructor(props) {
    super(props);
  }

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount = () => {
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick = () => {
    this.props.deletePost(this.props.params.id)
      .then(()=>{
        this.context.router.push('/');
      });
  }

  render = () => {
    if(!this.props.post) {
      return <div>loading...</div>;
    }
    const {title, categories, content} = this.props.post;

    return (
      <div className="post">
        <Link className="button" to="/">Back to Index</Link>
        <button className="alert button" onClick={this.onDeleteClick}>Delete Post</button>
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

export default connect(MapStateToProps, {fetchPost, deletePost})(PostShow);
