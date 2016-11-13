import { combineReducers } from 'redux';
import PostsReducer from './reducer_show_posts';
import PostReducer from './reducer_show_post';
import CreatePostsReducer from './reducer_create_post';
import DeletePostsReducer from './reducer_delete_post';

//import redux-form
import {reducer as FormReducer} from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  post: PostReducer,
  form: FormReducer,
  createPost: CreatePostsReducer,
  deletePost: DeletePostsReducer
});

export default rootReducer;
