import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
// just for the sake of testing, we don't need to register anything, as long as
// we use a unique string
const API_KEY = 'vhlongon';

export const FETCH_POSTS = generateActions('FETCH_POSTS');
export const CREATE_POST = generateActions('CREATE_POST');
export const FETCH_POST = generateActions('FETCH_POST');
export const DELETE_POST = generateActions('DELETE_POST');

// Generate object containing all actions states consts
export function generateActions(type) {
    return {
        REQUEST: type + '_REQUEST',
        SUCCESS: type + '_SUCCESS',
        FAILURE: type + '_FAILURE'
    };
}

// action creator to fetch all posts
export const fetchPosts = generateActionCreator('get', FETCH_POSTS);

// action creator to create a new post
export const createPost = generateActionCreator('post', CREATE_POST);

// action creator to fetch a specific post
export const fetchPost = generateActionCreator('get', FETCH_POST);

// action creator to delete a specific post
export const deletePost = generateActionCreator('delete', DELETE_POST);

// Generate our actions creators
function generateActionCreator(requestType, actionType, id, onSuccess = () => {}) {
    return function actionCreator(id = '', par = {}, onSuccess) {
        const url = `${ROOT_URL}/posts/${id}?key=${API_KEY}`;
        const request = axios[requestType](url, par);
        const action = Object.keys(actionType).map((k) => actionType[k]);
        return dispatch => {
            dispatch({type: action[0]});

            request.then(response => {
                dispatch({type: action[1], payload: response});
                if(onSuccess && typeof onSuccess === "function") {
                    onSuccess();
                }
            }).catch(error => {
                dispatch({type: action[2], error});
            });
        };
    }
}
