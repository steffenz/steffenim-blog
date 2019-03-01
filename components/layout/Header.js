import React, { Component } from 'react'
import styled from 'styled-components';
import MainMenu from './MainMenu';

const StyledHeader = styled.header`
    width:100%;
    background:#fff;
    height:8rem;
    box-shadow:0 0 1rem rgba(0,0,0, 0.2);

    h1 {
      font-weight:100;
      font-size:3rem;
    }
`

export default class Header extends Component {
  render() {
    return (
      <StyledHeader>
          <MainMenu/>
      </StyledHeader>
    )
  }
}
