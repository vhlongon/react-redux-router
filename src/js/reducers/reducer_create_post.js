import {CREATE_POST} from '../actions/index';

// define the initial state for our reducer
const INITIAL_STATE = {
  newPostError: null,
  postsCreated: 0,
  newPost: null
};

export default function (state = INITIAL_STATE, action){
  switch (action.type) {
    case CREATE_POST.REQUEST:
      console.log('creating post');
      return state;

    case CREATE_POST.SUCCESS:
      console.log('success creating post');
      return {
        ...state,
        postsCreated: state.postsCreated + 1,
        newPost: action.payload.data
      };

    case CREATE_POST.FAILURE:
      console.log('failure creating post');
      return {...state, newPostError: action.error.statusText };

    default:
      return state;
  }
}
