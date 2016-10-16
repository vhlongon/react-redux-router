import {FETCH_POST} from '../actions/index';

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

    case FETCH_POST.FETCH_POST_REQUEST:
      console.log('fetching single post');
      return state;
      break;

    case FETCH_POST.FETCH_POST_FAILURE:
    console.log('failure fetching single post');
      // since we need the state in another format we create a new structure using spread operator
      return {...state, error: action.error.statusText };
      break;

    case FETCH_POST.FETCH_POST_SUCCESS:
    console.log('success fetching single post');
      return{...state, post: action.payload.data };
      break;

    default:
      return state;
  }
}
