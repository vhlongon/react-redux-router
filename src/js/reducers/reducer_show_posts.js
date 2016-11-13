import {FETCH_POSTS} from '../actions/index';

// define the initial state for our reducer
const INITIAL_STATE = {
  // initial state for the list of posts, therefore is an empty array
  all: [],
  error: null
};

export default function (state = INITIAL_STATE, action){
  switch (action.type) {

    case FETCH_POSTS.REQUEST:
      console.log('fetching posts');
      return state;

    case FETCH_POSTS.SUCCESS:
    console.log('success fetching posts');
      // since we need the state in another format we create a new structure using spread operator
      return {...state, all: action.payload.data };

    case FETCH_POSTS.FAILURE:
    console.log('failure fetching posts');
      // since we need the state in another format we create a new structure using spread operator
      return {...state, error: action.error.statusText };

    default:
      return state;
  }
}
