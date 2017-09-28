import TYPES from './actionTypes';
import { search as movieSearch, getMovieDetail } from '../lib/movieService';

export const updateSearchText = text => ({
  type: TYPES.SET_SEARCH_TEXT,
  payload: text,
});
export const loadMovies = movies => ({
  type: TYPES.MOVIES_LOAD,
  payload: movies,
});
export const updateLoading = isLoad => ({
  type: TYPES.SET_LOADING,
  payload: isLoad,
});
export const updateCurrentMovie = movie => ({
  type: TYPES.SET_CURRENT_MOVIE,
  payload: movie,
});

export const searchMovie = text => {
  return dispatch => {
    dispatch(updateLoading(true));
    movieSearch(document.URL, text).then(res => {
      dispatch(loadMovies(res));
      dispatch(updateLoading(false));
    });
  };
};

export const getMovie = id => {
  return dispatch => {
    dispatch(updateLoading(true));
    getMovieDetail(id).then(res => {
      dispatch(updateCurrentMovie(res.table));
      dispatch(updateLoading(false));
    });
  };
};
