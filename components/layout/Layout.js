import React, { Component } from 'react'
import Header from './Header';

import Meta from '../Meta';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html { font-size:10px; }
  body {
    margin:0;
    padding:0;
    font-size:1.6rem;
    font-family: 'Roboto', sans-serif;
  }

  * { margin:0; padding:0; }
`

export const ThemeContext = React.createContext();

export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle/>
          <Meta/>
          <Header/>
          
          { this.props.children }
      </React.Fragment>
    )
  }
}
