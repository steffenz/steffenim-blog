import React, { Component } from 'react'

export default class Post extends Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}
