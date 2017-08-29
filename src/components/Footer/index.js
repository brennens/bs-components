import React, { Component } from 'react'
import styled from 'styled-components'
import theme from '../../theme'

const Footer = styled.footer`
  align-items: center;
  background: ${props => props.theme.neutral.gray10};
  display: flex;
  height: ${props => theme.config.footer};
  justify-content: center;
  span {
    color: ${props => props.theme.neutral.white};
  }
`

class FooterWrap extends Component {
  render () {
    return (
      <Footer>
        <span>By BS</span>
      </Footer>
    )
  }
}

export default FooterWrap
