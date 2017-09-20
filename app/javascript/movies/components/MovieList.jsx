import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieItem from './MovieItem'

class MovieList extends Component {
  render() {
    return (
      <div className="album text-muted">
        <div className="container">
          <div className="row">
            {this.props.movies.map(movie =>
              <MovieItem key={movie.id} {...movie}
                imagePath={this.props.imagePath}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => (state)

export default connect(mapStateToProps)(MovieList)