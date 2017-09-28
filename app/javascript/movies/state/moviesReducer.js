import TYPES from './actionTypes';

const initialState = {
  currentMovie: {},
  imagePath: '',
  isLoading: false,
  movies: [],
  searchText: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.MOVIES_LOAD:
      return { ...state, movies: action.payload };
    case TYPES.SET_SEARCH_TEXT:
      return { ...state, searchText: action.payload };
    case TYPES.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case TYPES.SET_CURRENT_MOVIE:
      return { ...state, currentMovie: action.payload };
    default:
      return state;
  }
};

export default reducer;
