import TYPES from './actionTypes'

const initialState = {
  imagePath: '',
  movies: [],
  searchText: '',
  msgStatus: '',
  currentMovie: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.MOVIES_LOAD:
      return {...state, movies: action.payload}
    case TYPES.SET_SEARCH_TEXT:
      return {...state, searchText: action.payload}
    case TYPES.SET_MSG_STATUS:
      return {...state, msgStatus: action.payload}
    case TYPES.SET_CURRENT_MOVIE:
      return {...state, currentMovie: action.payload}
    default:
      return state
  }
}

export default reducer