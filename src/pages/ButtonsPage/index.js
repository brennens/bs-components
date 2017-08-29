import React, { Component } from 'react'
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  QuaternaryButton,
} from '../../components/Buttons'
import Content from '../../components/Content'

class ButtonsPage extends Component {
  render () {
    return (
      <Content>
        <PrimaryButton>Button</PrimaryButton>
        <SecondaryButton>Button</SecondaryButton>
        <TertiaryButton>Button</TertiaryButton>
        <QuaternaryButton>Button</QuaternaryButton>
        <PrimaryButton hollow>Button</PrimaryButton>
        <SecondaryButton hollow>Button</SecondaryButton>
        <TertiaryButton hollow>Button</TertiaryButton>
        <QuaternaryButton hollow>Button</QuaternaryButton>
      </Content>
    )
  }
}

export default ButtonsPage
