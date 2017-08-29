import React, { Component } from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import HeaderWrap from '../components/Header'
import HomePage from '../pages/HomePage'
import FormElementsPage from '../pages/FormElementsPage'
import LinksPage from '../pages/LinksPage'
import ButtonsPage from '../pages/ButtonsPage'
import FooterWrap from '../components/Footer'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

class Base extends Component {
  render () {
    return (
      <Wrapper>
        <HeaderWrap />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/form-elements' component={FormElementsPage} />
          <Route path='/links' component={LinksPage} />
          <Route path='/buttons' component={ButtonsPage} />
        </Switch>
        <FooterWrap />
      </Wrapper>
    )
  }
}

export default Base
