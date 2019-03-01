import React, { Component } from 'react'
import styled from 'styled-components';
import Link from 'next/link';

const MenuWrapper = styled.nav`
  list-style:none;
  float: right;
  ul {
    list-style:none;
    

    li {
      padding:0 2rem 0 2rem;
      display: inline-block;
      line-height:8rem;
      height:7.5rem;
      text-transform: uppercase;

        &:nth-child(2){
          border-bottom:.5rem solid grey;
        }

        a {
          text-decoration:none;
          color:#000;
        }
      
    }
  }
 
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
                <Link href="/about">
                    <a>About</a>
                </Link>
            </li>

            <li>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </li>
          </ul>
      </MenuWrapper>
    )
  }
}
