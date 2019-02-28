import React, { Component } from 'react'
import Header from './Header';
import MainMenu from './MainMenu';

export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
          <Header/>
          <MainMenu/>
          { this.props.children }
      </React.Fragment>
    )
  }
}
