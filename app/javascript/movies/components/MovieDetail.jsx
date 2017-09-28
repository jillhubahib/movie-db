import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovie } from '../state/moviesActions';
import LoadingSpinner from './LoadingSpinner';

export const Casts = ({ casts }) =>
  <div>
    Casts
    <ul className="casts">
      {casts.map((cast, index) =>
        <li key={index}>
          {cast}
        </li>
      )}
    </ul>
  </div>;

export const Info = ({ title, year, genre, rating, synopsis }) =>
  <div>
    <h1 className="title">
      {title}
    </h1>
    <h5 className="year">
      {year}
    </h5>
    <h5 className="genre">
      {genre}
    </h5>
    <div className="rating">
      <img
        src="https://yts.ag/assets/images/website/logo-imdb.svg"
        alt="IMDb Rating"
      />{' '}
      <span>{rating}</span>
    </div>
    <p className="synopsis">
      {synopsis}
    </p>
  </div>;

class MovieDetail extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getMovie(this.props.id);
  }

  render() {
    if (Object.keys(this.props.currentMovie).length === 0) {
      return <LoadingSpinner />;
    }

    const { casts, title, image_path } = this.props.currentMovie;

    return (
      <div className="album">
        <div className="container">
          <div className="row movie-details">
            <div className="col-sm-4">
              <img src={image_path} alt={title} />
            </div>
            <div className="col-sm-8">
              <Info {...this.props.currentMovie} />
              {casts ? <Casts casts={casts} /> : ''}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    currentMovie: state.currentMovie,
    id: ownProps.match.params.id,
  }),
  { getMovie }
)(MovieDetail);
