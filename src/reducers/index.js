import { combineReducers } from 'redux';

// load external reducers
import counterReducer from './counter';
import tzReducer from './getTimezone';

// merge reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  timezone: tzReducer
});

export default rootReducer;


