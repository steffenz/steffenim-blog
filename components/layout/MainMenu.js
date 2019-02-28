import React, { Component } from 'react'
import styled from 'styled-components';
import Link from 'next/link';

const MenuWrapper = styled.nav`

`

export default class MainMenu extends Component {
  render() {
    return (
      <MenuWrapper>
          <ul>
            <li>
                <Link href="/">
                    <a>Blog</a>
                </Link>
            </li>
            
            <li>
                <Link as="/about" href="/page">
                    <a>About</a>
                </Link>
            </li>

            <li>
                <Link>
                    <a>Contact</a>
                </Link>
            </li>
          </ul>
      </MenuWrapper>
    )
  }
}
