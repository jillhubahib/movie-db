import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovie } from '../state/moviesActions';
import LoadingSpinner from './LoadingSpinner';

export const Casts = ({ casts }) => (
  <div>
    Casts:
    <ul className="casts">
      {casts.map((cast, index) => <li key={index}>{cast}</li>)}
    </ul>
  </div>
);

export const Info = ({
  title,
  synopsis,
  tagline,
  release_date,
  genres,
  revenue,
}) => (
  <div>
    <h1 className="title">{title}</h1>
    <h5>{tagline}</h5>
    <p className="synopsis">{synopsis}</p>
    <div className="mb-2">
      <div>
        Genre: <span className="font-weight-bold">{genres}</span>{' '}
      </div>
      <div>
        Released date: <span className="font-weight-bold">
          {release_date}
        </span>{' '}
      </div>
      <div>
        Revenue:{' '}
        <span className="font-weight-bold">
          $ {Number(revenue).toLocaleString('en')}
        </span>{' '}
      </div>
    </div>
  </div>
);

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
