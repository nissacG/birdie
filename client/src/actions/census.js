import { HC_TEST, SET_COLUMNS, SELECT_COLUMN, SET_COLUMN_DATA, SET_DATA_COUNT } from './types'
import { setLoadingAdd, setLoadingMinus } from './ui'
import { hc, getColumns, getColumnData } from '../providers/index'

// ACTIONS (interact with reducer)
const hcTest = hc => ({
  type: HC_TEST,
  hc
})

const setColumns = columns => ({
  type: SET_COLUMNS,
  columns
})

const selectColumn = column => ({
  type: SELECT_COLUMN,
  column
})

const setColumnsData = data => ({
  type: SET_COLUMN_DATA,
  data
})

const setDataCount = count => ({
  type: SET_DATA_COUNT,
  count
})

// ACTION CREATORS (call these from components)

export const getHC = () => dispatch => {
  hc()
    .then(result => {
      dispatch(hcTest(result))
    })
    .catch(err => dispatch(console.log(err)))
}

export const getAllColumns = () => dispatch => {
  dispatch(setLoadingAdd())
  getColumns()
    .then(columns => {
      dispatch(setColumns(columns))
      dispatch(setLoadingMinus())
    })
    .catch(err => {
      dispatch(console.log(err))
      dispatch(setLoadingMinus())
    })
}

export const columnSelect = column => dispatch => {
  dispatch(setLoadingAdd())
  dispatch(selectColumn(column))

  getColumnData(column)
    .then((data) => {
      dispatch(setColumnsData(data[0]))
      dispatch(setDataCount(data[1][0].total_values))
      dispatch(setLoadingMinus())
    })
    .catch(err => {
      dispatch(console.log(err))
      dispatch(setLoadingMinus())
    })

}
