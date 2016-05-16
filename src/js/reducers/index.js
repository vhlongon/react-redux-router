import { combineReducers } from 'redux';
import ListReducer from './reducer_list';
import ActiveItem from './reducer_active_item';

const rootReducer = combineReducers({
  items: ListReducer,
  ActiveItem: ActiveItem
});

export default rootReducer;
