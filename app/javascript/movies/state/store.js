import { createStore, combineReducers } from 'redux'
import reducer from './moviesReducer'

const configureStore = (preloadedState) => {
  return createStore(reducer, preloadedState)
}

export default configureStore