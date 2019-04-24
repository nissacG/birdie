import { SET_LOADING_ADD, SET_LOADING_MINUS } from '../actions/types'

const initialState = {
  loading: 0
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING_ADD:
      return {
        ...state,
        loading: state.loading + 1
      }
    case SET_LOADING_MINUS:
      return {
        ...state,
        loading: state.loading - 1
      }
    default:
      return state
  }
}
