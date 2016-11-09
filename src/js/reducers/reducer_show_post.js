import {FETCH_POST} from '../actions/index';

// define the initial state for our reducer
const INITIAL_STATE = {
  // since it is the initial state for the single post page we can only pass it null
  post: null,
  error: null
};

export default function (state = INITIAL_STATE, action){
  switch (action.type) {

    case FETCH_POST.REQUEST:
      console.log('fetching single post');
      return state;

    case FETCH_POST.FAILURE:
    console.log('failure fetching single post');
      // since we need the state in another format we create a new structure using spread operator
      return {...state, error: action.error.statusText };

    case FETCH_POST.SUCCESS:
    console.log('success fetching single post');
      return{...state, post: action.payload.data };

    default:
      return state;
  }
}
