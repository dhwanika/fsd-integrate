import * as actionTypes from '../constants/actionTypes';

export function getTasksAction(params) {
  
    return { type: actionTypes.GET_TASK, params };
  
  }
  
   
  
  export function getTasksSuccessAction(taskList) {
  
    return { type: actionTypes.GET_TASK_SUCCESS, taskList };
  
  }
  
   
  
  export function getTasksErrorAction(error) {
  
    return { type: actionTypes.GET_TASK_ERROR, error };
  
  }