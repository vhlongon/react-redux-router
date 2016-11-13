import deepFreeze from 'deep-freeze';
import reducerCreatePost from '../js/reducers/reducer_create_post';
import {INITIAL_STATE_CREATE_POST, ERROR, SINGLE_POST} from './mock';
import {CREATE_POST} from '../js/actions/index';

describe('create post reducer', () => {
  test('Should return initial create post state', () => {

    const ACTION = {
      type: CREATE_POST.REQUEST,
    };

    deepFreeze(INITIAL_STATE_CREATE_POST);
    deepFreeze(ACTION);
    expect(reducerCreatePost(INITIAL_STATE_CREATE_POST, ACTION)).toEqual(INITIAL_STATE_CREATE_POST);
    expect(reducerCreatePost(INITIAL_STATE_CREATE_POST, {})).toEqual(INITIAL_STATE_CREATE_POST);
  });

  test('Error - should return an error message when creating a new post', () => {

    const ACTION = {
      type: CREATE_POST.FAILURE,
      error: {statusText: ERROR.statusText}
    };

    const EXPECTED = {
      newPostError: ACTION.error.statusText,
      postsCreated: 0,
      newPost: null
    };
    deepFreeze(INITIAL_STATE_CREATE_POST);
    deepFreeze(ACTION);
    expect(reducerCreatePost(INITIAL_STATE_CREATE_POST, ACTION)).toEqual(EXPECTED);
  });

  test('Success - should return the total number of posts created and then actual post created', () => {

    const ACTION = {
      type: CREATE_POST.SUCCESS,
      payload: {data: SINGLE_POST}
    };

    const EXPECTED = {
      newPostError: null,
      postsCreated: INITIAL_STATE_CREATE_POST.postsCreated + 1,
      newPost: ACTION.payload.data
    };
    deepFreeze(INITIAL_STATE_CREATE_POST);
    deepFreeze(ACTION);
    expect(reducerCreatePost(INITIAL_STATE_CREATE_POST, ACTION)).toEqual(EXPECTED);
  });
});
