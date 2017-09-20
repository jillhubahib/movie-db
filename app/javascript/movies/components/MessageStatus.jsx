import React, { Component } from 'react'
import { connect } from 'react-redux'

class MessageStatus extends Component {
  render() {
    return (
      <p className="text-center">{this.props.msgStatus}</p>
    )
  }
}

export default connect(
  (state) => ({msgStatus: state.msgStatus})
)(MessageStatus)