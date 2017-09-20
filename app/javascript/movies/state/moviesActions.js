import TYPES from './actionTypes'
import { search as movieSearch } from '../lib/movieService'

export const updateSearchText = (text) => ({type: TYPES.SET_SEARCH_TEXT, payload: text})
export const loadMovies = (movies) => ({type: TYPES.MOVIES_LOAD, payload: movies})
export const updateMsgStatus = (msg) => ({type: TYPES.SET_MSG_STATUS, payload: msg})

export const searchMovie = (text) => {
  return (dispatch) => {
    dispatch(updateMsgStatus('Searching...'))
    movieSearch(document.URL, text)
      .then(res => {
        dispatch(updateMsgStatus(''))
        dispatch(loadMovies(res))
      })
  }
}