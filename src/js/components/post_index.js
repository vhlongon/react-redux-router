import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index';

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
      <div>List of blog posts.</div>
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
