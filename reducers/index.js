import { combineReducers } from 'redux'
import {requestSummaryReducer} from './taskReducer'

const rootReducer = combineReducers({
  taskList: requestSummaryReducer,
  taskInsert:requestSummaryReducer,
  taskUpdate:requestSummaryReducer
})

export default rootReducer