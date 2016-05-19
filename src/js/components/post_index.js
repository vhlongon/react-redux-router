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

  render = () => {
    return (
      <div>
        <div className="top-bar text-right">
          <Link to="/posts/new" className="button">Add a post</Link>

        </div>
        List of blog posts.
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

export default connect(null, {fetchPosts})(PostIndex);
