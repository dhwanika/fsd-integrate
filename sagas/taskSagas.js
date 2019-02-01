import { call, put, takeEvery } from 'redux-saga/effects';

import { getData, getDataApi, postDataApi, ENVIRONMENT, putDataApi } from '../api/apiCall';

import { getTasksSuccessAction, getTasksErrorAction,
  postTasksSuccessAction, postTasksErrorAction,
  putTasksSuccessAction, putTasksErrorAction} from '../actions/taskAction';

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

    export function* postTasks(action) {
      debugger;
      
        try {
           const response = yield call(postDataApi, '/task', action.params);
      
            yield put(postTasksSuccessAction(response.data));
      
        } catch (error) {
      
          yield put(postTasksErrorAction(error));
      
        }
      
      }
      
       
      
      export function* watchPostTasks() {
      
        yield takeEvery(actionTypes.POST_TASK, postTasks);
      
      }

      export function* putTasks(action) {
          try {
             const response = yield call(putDataApi, `/task/${action.params.taskId}`, action.params);
        
              yield put(putTasksSuccessAction(response.data));
        
          } catch (error) {
        
            yield put(putTasksErrorAction(error));
        
          }
        
        }
        export function* watchPutTasks() {
        
          yield takeEvery(actionTypes.PUT_TASK, putTasks);
        
        }