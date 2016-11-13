import {DELETE_POST} from '../actions/index';

// define the initial state for our reducer
const INITIAL_STATE = {
  deletePostError: null,
  postsDeleted: 0,
  postDeleted: null
};

export default function (state = INITIAL_STATE, action){
  switch (action.type) {
    case DELETE_POST.REQUEST:
      console.log('deleting post');
      return state;

    case DELETE_POST.SUCCESS:
      console.log('success deleting post');
      return {
        ...state,
        postsDeleted: state.postsDeleted + 1,
        postDeleted: action.payload.data
      };

    case DELETE_POST.FAILURE:
      console.log('failure deleting post');
      return {...state, deletePostError: action.error.statusText };

    default:
      return state;
  }
}
