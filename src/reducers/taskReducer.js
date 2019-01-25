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
  