/*eslint-disable*/

import { all, fork } from 'redux-saga/effects';

import { watchGetTasks } from './taskSagas';

 

export default function* rootSaga() {

  yield all([

    fork(watchGetTasks)

  ]);

}