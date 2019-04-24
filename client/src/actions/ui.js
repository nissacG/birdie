import { SET_LOADING_ADD, SET_LOADING_MINUS } from './types'

// ACTIONS (interact with reducer)
export const setLoadingAdd = () => ({
  type: SET_LOADING_ADD
})

export const setLoadingMinus = () => ({
  type: SET_LOADING_MINUS
})

// ACTION CREATORS (call these from components)

export const setLoadingOverlay = (loading) => dispatch => { // Used to call from other actions
  if (loading === true) {
    dispatch(setLoadingAdd())
  } else {
    dispatch(setLoadingMinus())
  }
}