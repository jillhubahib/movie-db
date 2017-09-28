import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './moviesReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = preloadedState => {
  return createStore(
    reducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk))
  );
};

export default configureStore;
