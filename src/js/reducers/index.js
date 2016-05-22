import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';

//import redux-form
import {reducer as FormReducer} from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: FormReducer
});

export default rootReducer;
