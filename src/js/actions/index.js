import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

export const CREATE_POST = 'CREATE_POST';

export const FETCH_POST = 'FETCH_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
// just for the sake of testing, we don't need to register anything, as long as
// we use a unique string
const API_KEY = 'vhlongon';

// action creator to fetch all posts
export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

// action creator to create a new post
export function createPost(props) {
    // pass props as the second argument so inputs content follow with the post request
    const request = axios.post(`${ROOT_URL}/posts?key=${API_KEY}`, props);
    return {
        type: CREATE_POST,
        payload: request
    }
}

// action creator to fetch a specific post
export function fetchPost(id) {
    // pass props as the second argument so inputs content follow with the post request
    const request = axios.get(`${ROOT_URL}/posts/${id}?key=${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    }
}
