import initialState from './initialState';

import * as actionTypes from '../constants/actionTypes';

export function requestSummaryReducer(state = initialState.taskList, action) {
  
    switch (action.type) {
  
      case actionTypes.GET_TASK: {
  
        return {
  
          ...state
  
        };
  
      }
  
      case actionTypes.GET_TASK_SUCCESS: {
  
        try {
  
          return {
  
            ...state,
  
            taskList: action.taskList,
  
          };
  
        } catch (error) {
  
          return {
  
            ...state,
  
            taskList: state.taskList,
  
            error
  
          };
  
        }
  
      }
  
      case actionTypes.GET_TASK_ERROR: {
  
        return {
  
          ...state,
  
          taskList: [],
  
          error: action.error
  
        };
  
      }
  
      default: {
  
        return state;
  
      }
  
    }
  
  }

  export function requestSummaryPostReducer(state = initialState.taskInsert, action) {
    
      switch (action.type) {
    
        case actionTypes.POST_TASK: {
    
          return {
    
            ...state
    
          };
    
        }
    
        case actionTypes.POST_TASK_SUCCESS: {
    
          try {
    
            return {
    
              ...state,
    
              taskInsert: action.taskInsert,
    
            };
    
          } catch (error) {
    
            return {
    
              ...state,
    
              taskInsert: state.taskInsert,
    
              error
    
            };
    
          }
    
        }
    
        case actionTypes.POST_TASK_ERROR: {
    
          return {
    
            ...state,
    
            taskInsert: [],
    
            error: action.error
    
          };
    
        }
    
        default: {
    
          return state;
    
        }
    
      }
    
    }
    
    export function requestSummaryPutReducer(state = initialState.taskUpdate, action) {
      
        switch (action.type) {
      
          case actionTypes.PUT_TASK: {
      
            return {
      
              ...state
      
            };
      
          }
      
          case actionTypes.PUT_TASK_SUCCESS: {
      
            try {
      
              return {
      
                ...state,
      
                taskUpdate: action.taskUpdate,
      
              };
      
            } catch (error) {
      
              return {
      
                ...state,
      
                taskUpdate: state.taskUpdate,
      
                error
      
              };
      
            }
      
          }
      
          case actionTypes.PUT_TASK_ERROR: {
      
            return {
      
              ...state,
      
              taskUpdate: [],
      
              error: action.error
      
            };
      
          }
      
          default: {
      
            return state;
      
          }
      
        }
      
      }