import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import theme from '../../theme'

const Header = styled.header`
  align-items: center;
  border-bottom: solid 1px ${props => props.theme.neutral.gray20};
  display: flex;
  flex-direction: column;
  height: ${props => theme.config.header};
  justify-content: center;
`

const H1 = styled.h1`
  color: ${props => props.theme.primary}
`

const Nav = styled.nav`
  margin-top: 20px;
`

const StyledLink = styled(NavLink)`
  color: ${props => props.theme.secondary};
  margin: 0 5px;
  text-decoration: none;
  &.is-active {
    text-decoration: underline;
  }
`

class HeaderWrap extends Component {
  render () {
    return (
      <Header>
        <H1>Styled Components Boilerplate</H1>
        <Nav>
          <StyledLink exact to='/' activeClassName='is-active'>Home</StyledLink>
          <StyledLink exact to='/form-elements' activeClassName='is-active'>Form Elements</StyledLink>
          <StyledLink exact to='/links' activeClassName='is-active'>Links</StyledLink>
          <StyledLink exact to='/buttons' activeClassName='is-active'>Buttons</StyledLink>
        </Nav>
      </Header>
    )
  }
}

export default HeaderWrap
