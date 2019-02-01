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
  
  export function postTasksAction(params) {
    
      return { type: actionTypes.POST_TASK, params };
    
    }
    
     
    
    export function postTasksSuccessAction(taskInsert) {
    
      return { type: actionTypes.POST_TASK_SUCCESS, taskInsert };
    
    }
    
     
    
    export function postTasksErrorAction(error) {
    
      return { type: actionTypes.POST_TASK_ERROR, error };
    
    }

    export function putTasksAction(params) {
      
        return { type: actionTypes.PUT_TASK, params };
      
      }
      
       
      
      export function putTasksSuccessAction(taskUpdate) {
      
        return { type: actionTypes.PUT_TASK_SUCCESS, taskUpdate };
      
      }
      
       
      
      export function putTasksErrorAction(error) {
      
        return { type: actionTypes.PUT_TASK_ERROR, error };
      
      }