import React, { Component } from 'react'
import {
  InputGroup,
  Label,
  Textfield,
  Textarea,
  CheckboxWrapper,
  CheckboxInput,
  CheckboxControl,
  RadioWrapper,
  RadioInput,
  RadioControl,
} from '../../components/FormElements'
import Content from '../../components/Content'

class FormElementsPage extends Component {
  render () {
    return (
      <Content>
        <InputGroup>
          <Label>Textfield</Label>
          <Textfield />
        </InputGroup>
        <InputGroup>
          <Label>Textarea</Label>
          <Textarea />
        </InputGroup>
        <InputGroup>
          <Label>Checkbox</Label>
          <CheckboxWrapper>
            <CheckboxInput />
            <CheckboxControl />
            I am a checkbox
          </CheckboxWrapper>
        </InputGroup>
        <InputGroup>
          <Label>Radio</Label>
          <RadioWrapper>
            <RadioInput />
            <RadioControl />
            I am a radio
          </RadioWrapper>
        </InputGroup>
      </Content>
    )
  }
}

export default FormElementsPage
