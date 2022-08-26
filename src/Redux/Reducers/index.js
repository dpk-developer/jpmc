import { combineReducers } from 'redux';

import DataReducer from './DataReducer';

const rootReducer = combineReducers({
  dataReducer: DataReducer,
});

export default rootReducer;
