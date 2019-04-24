import { combineReducers } from 'redux'
import censusReducer from './census'
import uiReducer from './ui'

export default combineReducers({
  census: censusReducer,
  ui: uiReducer,
})
