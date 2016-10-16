import {CREATE_POST} from '../actions/index';

// define the initial state for our reducer
const INITIAL_STATE = {
  newPostError: null
};

export default function (state = INITIAL_STATE, action){
  switch (action.type) {
    case CREATE_POST.CREATE_POST_REQUEST:
      console.log('creating post');
      return state;
      break;

    case CREATE_POST.CREATE_POST_SUCCESS:
      console.log('success creating post');
      return state;
      break;

    case CREATE_POST.CREATE_POST_FAILURE:
      console.log('failure creating post');
      return {...state, newPostError: action.error.statusText };
      break;

    default:
      return state;
  }
}
