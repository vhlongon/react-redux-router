import deepFreeze from 'deep-freeze';
import reducerShowPost from '../js/reducers/reducer_show_post';
import {SINGLE_POST, INITIAL_STATE_POST, ERROR} from './mock';
import {FETCH_POST} from '../js/actions/index';

describe('show single post reducer', () => {
  test('Should return initial state', () => {

    const ACTION = {
      type: FETCH_POST.REQUEST,
    };

    deepFreeze(INITIAL_STATE_POST);
    deepFreeze(ACTION);
    expect(reducerShowPost(INITIAL_STATE_POST, ACTION)).toEqual(INITIAL_STATE_POST);
    expect(reducerShowPost(INITIAL_STATE_POST, {})).toEqual(INITIAL_STATE_POST);
  });

  test('Error - should return an error message', () => {

    const ACTION = {
      type: FETCH_POST.FAILURE,
      error: {statusText: ERROR.statusText}
    };

    const EXPECTED = {
      // since it is the initial state for the single post page we can only pass it null
      post: null,
      error: ACTION.error.statusText
    };
    deepFreeze(INITIAL_STATE_POST);
    deepFreeze(ACTION);
    expect(reducerShowPost(INITIAL_STATE_POST, ACTION)).toEqual(EXPECTED);
  });

  test('Success - should return a single post', () => {

    const ACTION = {
      type: FETCH_POST.SUCCESS,
      payload: {data: SINGLE_POST}
    };

    const EXPECTED = {
      // since it is the initial state for the single post page we can only pass it null
      post: SINGLE_POST,
      error: null
    };
    deepFreeze(INITIAL_STATE_POST);
    deepFreeze(ACTION);
    expect(reducerShowPost(INITIAL_STATE_POST, ACTION)).toEqual(EXPECTED);
  });
});
