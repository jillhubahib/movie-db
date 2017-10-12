import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export const MovieImage = ({ name, src }) => <img alt={name} src={src} />;

export const VoteBadge = ({ vote_average }) => (
  <h6>
    Vote Average <span className="badge badge-default">{vote_average}/10</span>
  </h6>
);

class MovieItem extends Component {
  render() {
    const { title, imagePath, poster_path, vote_average, id } = this.props;
    const imageSize = 'w300_and_h450_bestv2';
    const src = poster_path
      ? `${imagePath}${imageSize}${poster_path}`
      : undefined;

    return (
      <div className="card">
        <Link to={`/movie/${id}`}>
          <MovieImage name={title} src={src} />
        </Link>
        <p className="card-text" />
        <VoteBadge vote_average={vote_average} />
      </div>
    );
  }
}

export default MovieItem;
