import { HC_TEST, SET_COLUMNS, SELECT_COLUMN } from '../actions/types'

const initialState = {
  hc: '',
  columns: [],
  selectedColumn: 'gh'
}

export default function(state = initialState, action) {
  switch (action.type) {
    case HC_TEST:
      return {
        ...state,
        hc: action.hc
      }
    case SET_COLUMNS:
      return {
        ...state,
        columns: action.columns
      }
    case SELECT_COLUMN:
      return {
        ...state,
        selectedColumn: action.column
      }
    default:
      return state
  }
}
