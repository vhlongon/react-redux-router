import {FETCH_POSTS} from '../actions/index';

// define the initial state for our reducer
const INITIAL_STATE = {
  // initial state for the list of posts, therefore is an empty array
  all: [],
  // since it is the initial state for the single post page we can only pass it null
  post: null,
  error: null
};

export default function (state = INITIAL_STATE, action){
  switch (action.type) {

    case FETCH_POSTS.FETCH_POSTS_REQUEST:
      console.log('fetching posts');
      return state;
      break;

    case FETCH_POSTS.FETCH_POSTS_SUCCESS:
    console.log('success fetching posts');
      // since we need the state in another format we create a new structure using spread operator
      return {...state, all: action.payload.data };
      break;

    case FETCH_POSTS.FETCH_POSTS_FAILURE:
    console.log('failure fetching posts');
      // since we need the state in another format we create a new structure using spread operator
      return {...state, error: action.error.statusText };
      break;

    default:
      return state;
  }
}
