import { combineReducers } from 'redux';

// load external reducers
import counterReducer from './counter_example';
import tzReducer from './getTimezone_example';

// merge reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  timezone: tzReducer
});

export default rootReducer;


