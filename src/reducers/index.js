import { combineReducers } from 'redux';
import { resourceReducer } from 'redux-resource';

export default combineReducers({
  buses: resourceReducer('buses'),
})
