import { call, put, takeEvery } from 'redux-saga/effects';

import { getData, getDataApi, postDataApi, ENVIRONMENT } from '../api/apiCall';

import { getTasksSuccessAction, getTasksErrorAction } from '../actions/taskAction';

import * as actionTypes from '../constants/actionTypes';


export function* getTasks() {
    debugger;
    
      try {
         const response = yield call(getDataApi, '/tasks');
    
          yield put(getTasksSuccessAction(response.data));
    
      } catch (error) {
    
        yield put(getTasksErrorAction(error));
    
      }
    
    }
    
     
    
    export function* watchGetTasks() {
    
      yield takeEvery(actionTypes.GET_TASK, getTasks);
    
    }