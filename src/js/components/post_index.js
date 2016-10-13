import React, {Component} from 'react';
import {connect} from 'react-redux';
// not necessary anymore since we use a short way to connect to redux
// import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index';

// import the Link component so we can use it to navigate from on route to another with the router
import {Link} from 'react-router';

class PostIndex extends Component {

  constructor(props) {
    super(props);
  }
  componentWillMount = () => {
    // make fetch call to API just before the component renders
    this.props.fetchPosts();
  }

  renderPosts = () => {
    return this.props.posts.map((post) => {
      return (
        <Link to={`/posts/${post.id}`} key={post.id}>
          <li className="list-group-item">
          <span className="list-group-item__title text-right">Title: <b>{post.title} </b></span>
          <span className="list-group-item__category text-left">Categories: <b>{post.categories} </b></span>
          </li>
        </Link>
      );
    });
  }
  render = () => {
    return (
      <div>
        <div className="top-bar text-right">
          <Link to="/posts/new" className="button">Add a post</Link>

        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts}, dispatch);
// }
//
// //the first param would be mapStateToProps but since we dont have any we pass null
// export default connect(null, mapDispatchToProps)(PostIndex);


// doing like this still makes the fetchPosts available as props on the object:

//export default connect(null, {fetchPosts: fetchPosts})(PostIndex);

// or instead we can use destructuring with ES6 to shorten even more like so:

function MapStateToProps(state) {
  return { posts: state.posts.all };
}

//UPDATE no more export default connect(null, {fetchPosts})(PostIndex),
// since now we have indded a piece of redux state to map to your component props, thus:

export default connect(MapStateToProps, {fetchPosts})(PostIndex);
