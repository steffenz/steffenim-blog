import React, { Component } from 'react'
import styled from 'styled-components';

const StyledHeader = styled.header`
    width:100%;
    background:red;
`

export default class Header extends Component {
  render() {
    return (
      <StyledHeader>
          Header.
      </StyledHeader>
    )
  }
}
