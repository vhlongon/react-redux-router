import deepFreeze from 'deep-freeze';
import reducerShowPosts from '../js/reducers/reducer_show_posts';
import {POSTS, INITIAL_STATE_POSTS, ERROR} from './mock';
import {FETCH_POSTS} from '../js/actions/index';

describe('show posts reducer', () => {
  test('Should return initial posts state', () => {

    const ACTION = {
      type: FETCH_POSTS.REQUEST,
    };

    deepFreeze(INITIAL_STATE_POSTS);
    deepFreeze(ACTION);
    expect(reducerShowPosts(INITIAL_STATE_POSTS, ACTION)).toEqual(INITIAL_STATE_POSTS);
    expect(reducerShowPosts(INITIAL_STATE_POSTS, {})).toEqual(INITIAL_STATE_POSTS);
  });

  test('Error - should return an error message when retrieving posts', () => {

    const ACTION = {
      type: FETCH_POSTS.FAILURE,
      error: {statusText: ERROR.statusText}
    };

    const EXPECTED = {
      // since it is the initial state for the single post page we can only pass it null
      all: [],
      error: ACTION.error.statusText
    };
    deepFreeze(INITIAL_STATE_POSTS);
    deepFreeze(ACTION);
    expect(reducerShowPosts(INITIAL_STATE_POSTS, ACTION)).toEqual(EXPECTED);
  });

  test('Success - should return an array of posts', () => {

    const ACTION = {
      type: FETCH_POSTS.SUCCESS,
      payload: {data: POSTS}
    };

    const EXPECTED = {
      // since it is the initial state for the single post page we can only pass it null
      all: POSTS,
      error: null
    };
    deepFreeze(INITIAL_STATE_POSTS);
    deepFreeze(ACTION);
    expect(reducerShowPosts(INITIAL_STATE_POSTS, ACTION)).toEqual(EXPECTED);
  });
});
