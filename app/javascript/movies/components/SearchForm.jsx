import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSearchText, searchMovie } from '../state/moviesActions';

class SearchForm extends Component {
  handleInputChange = evt => {
    const val = evt.target.value;
    this.props.updateSearchText(val);
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.props.searchText.trim().length > 0) {
      this.props.searchMovie(this.props.searchText);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Search movies"
          value={this.props.searchText}
          onChange={this.handleInputChange}
        />{' '}
        <button className="btn btn-sm btn-primary">Go</button>
      </form>
    );
  }
}

export default connect(state => ({ searchText: state.searchText }), {
  updateSearchText,
  searchMovie,
})(SearchForm);
