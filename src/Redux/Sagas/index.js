import { all, fork } from 'redux-saga/effects';
import watchDataSaga from './DataSaga';

const rootSaga = function* () {
  yield all([fork(watchDataSaga)]);
};

export default rootSaga;
