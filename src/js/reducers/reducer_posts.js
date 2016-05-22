import {FETCH_POSTS} from '../actions/index';

// define the initial state for our reducer
const INITIAL_STATE = {
  // initial state for the list of posts, therefore is an empty array
  all: [],
  // since it is the initial state for the single post page we can only pass it null
  post: null
};

export default function (state = INITIAL_STATE, action){
  switch (action.type) {
    case FETCH_POSTS:
        // since we need the state in another format we create a new structure using spread operator
        return {...state, all: action.payload.data };
      break;
    default:
      return state;
  }
}
