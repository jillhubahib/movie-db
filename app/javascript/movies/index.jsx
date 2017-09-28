import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import configureStore from './state/store';
import MovieDetail from './components/MovieDetail';

document.addEventListener('DOMContentLoaded', () => {
  const movieNode = document.getElementById('movies_data');
  const movieData = JSON.parse(movieNode.getAttribute('data'));

  const imagePathNode = document.getElementById('image_path');
  const imagePath = JSON.parse(imagePathNode.getAttribute('data'));

  const preloadedState = {
    currentMovie: {},
    imagePath: imagePath,
    isLoading: false,
    movies: movieData,
    searchText: '',
  };
  const store = configureStore(preloadedState);

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/movie/:id" component={MovieDetail} />
        </div>
      </Router>
    </Provider>,
    document.getElementById('react-movies')
  );
});
