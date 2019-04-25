import { HC_TEST, SET_COLUMNS, SELECT_COLUMN, SET_COLUMN_DATA, SET_DATA_COUNT } from '../actions/types'

const initialState = {
  hc: '',
  columns: [],
  selectedColumn: '',
  columnData: [],
  count: 0
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
    case SET_COLUMN_DATA:
      return {
        ...state,
        columnData: action.data.sort((a, b) => b.count - a.count)
      }
    case SET_DATA_COUNT:
      return {
        ...state,
        count: action.count
      }
    default:
      return state
  }
}
