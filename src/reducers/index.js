import { combineReducers } from 'redux'
import {requestSummaryReducer} from './taskReducer'

const rootReducer = combineReducers({
  taskList: requestSummaryReducer
})

export default rootReducer