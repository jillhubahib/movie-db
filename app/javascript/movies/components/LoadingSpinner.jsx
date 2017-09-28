import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SyncLoader } from 'react-spinners';

class LoadingSpinner extends Component {
  render() {
    return (
      <div className="text-center mt-4">
        <SyncLoader loading={this.props.isLoading} />
      </div>
    );
  }
}

export default connect(state => ({ isLoading: state.isLoading }))(
  LoadingSpinner
);
