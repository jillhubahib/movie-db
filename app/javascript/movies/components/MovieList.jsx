import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';
import { updateCurrentMovie } from '../state/moviesActions';

class MovieList extends Component {
  componentWillMount() {
    this.props.dispatch(updateCurrentMovie({}));
  }

  render() {
    return (
      <div className="album text-muted">
        <div className="container">
          <div className="row">
            {this.props.movies.map(movie =>
              <MovieItem
                key={movie.id}
                {...movie}
                imagePath={this.props.imagePath}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  movies: state.movies,
  imagePath: state.imagePath,
}))(MovieList);
