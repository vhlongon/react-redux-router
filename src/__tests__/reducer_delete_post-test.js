import deepFreeze from 'deep-freeze';
import reducerDeletePost from '../js/reducers/reducer_delete_post';
import {INITIAL_STATE_DELETE_POST, ERROR, SINGLE_POST} from './mock';
import {DELETE_POST} from '../js/actions/index';

describe('delete post reducer', () => {
  test('Should return initial delete post state', () => {

    const ACTION = {
      type: DELETE_POST.REQUEST,
    };

    deepFreeze(INITIAL_STATE_DELETE_POST);
    deepFreeze(ACTION);
    expect(reducerDeletePost(INITIAL_STATE_DELETE_POST, ACTION)).toEqual(INITIAL_STATE_DELETE_POST);
    expect(reducerDeletePost(INITIAL_STATE_DELETE_POST, {})).toEqual(INITIAL_STATE_DELETE_POST);
  });

  test('Error - should return an error message when deleting a new post', () => {

    const ACTION = {
      type: DELETE_POST.FAILURE,
      error: {statusText: ERROR.statusText}
    };

    const EXPECTED = {
      deletePostError: ACTION.error.statusText,
      postsDeleted: 0,
      postDeleted: null
    };
    deepFreeze(INITIAL_STATE_DELETE_POST);
    deepFreeze(ACTION);
    expect(reducerDeletePost(INITIAL_STATE_DELETE_POST, ACTION)).toEqual(EXPECTED);
  });

  test('Success - should return the total number  of posts deleted and the actual post deleted', () => {

    const ACTION = {
      type: DELETE_POST.SUCCESS,
      payload: {data: SINGLE_POST}
    };

    const EXPECTED = {
      deletePostError: null,
      postsDeleted: INITIAL_STATE_DELETE_POST.postsDeleted + 1,
      postDeleted: ACTION.payload.data
    };
    deepFreeze(INITIAL_STATE_DELETE_POST);
    deepFreeze(ACTION);
    expect(reducerDeletePost(INITIAL_STATE_DELETE_POST, ACTION)).toEqual(EXPECTED);
  });
});
