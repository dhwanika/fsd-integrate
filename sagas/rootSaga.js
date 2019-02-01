/*eslint-disable*/

import { all, fork } from 'redux-saga/effects';

import { watchGetTasks, watchPostTasks , watchPutTasks} from './taskSagas';

 

export default function* rootSaga() {

  yield all([

    fork(watchGetTasks),
    fork(watchPostTasks),
    fork(watchPutTasks)

  ]);

}