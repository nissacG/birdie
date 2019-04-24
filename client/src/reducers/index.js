import { combineReducers } from 'redux'
import censusReducer from './census'

export default combineReducers({
  census: censusReducer
})
