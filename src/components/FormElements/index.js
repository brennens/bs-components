import styled from 'styled-components'
import media from '../../media-queries'

const FormElements = {}

const InputGroup = styled.div`
  margin: 20px 0 0;
`

const Label = styled.label`
  display: block;
  color: ${props => props.theme.primary};
`

const Textfield = styled.input`
  border: solid 1px ${props => props.theme.primary};
  display: block;
  font-size: 1.6rem;
  height: 40px;
  padding: 0 5px;
  width: 100%;
  ${media.desktop`
    border: solid 1px ${props => props.theme.secondary};
  `}
`

const Textarea = styled.textarea`
  border: solid 1px ${props => props.theme.primary};
  display: block;
  font-size: 1rem;
  height: 150px;
  max-height: 150px;
  max-width: 100%;
  padding: 5px;
  width: 100%;
`

const CheckboxWrapper = styled.label`
  cursor: pointer;
  display: inline-block;
  padding-left: 24px;
  position: relative;
  input:checked ~ span:after {
    border-color: ${props => props.theme.primary};
    border-style: solid;
    border-width: 2px 2px 0 0;
    content: '';
    display: inline-block;
    height: 5px;
    right: 2px;
    position: absolute;
    transform: rotate(135deg);
    top: 3px;
    width: 12px;
  }
`

const CheckboxInput = styled.input.attrs({
  type: 'checkbox',
})`
  position: absolute;
  opacity: 0;
  z-index: -1;
`

const CheckboxControl = styled.span`
  background-color: ${props => props.theme.neutral.white};
  border: solid 1px ${props => props.theme.primary};
  border-radius: 4px;
  display: block;
  height: 20px;
  left: 0;
  position: absolute;
  top: 0;
  width: 20px;
  user-select: none;
`

const RadioWrapper = styled.label`
  cursor: pointer;
  display: block;
  position: relative;
  padding-left: 24px;
  input:checked ~ span {
    background: transparent;
  }
  input:checked ~ span:after {
    background: ${props => props.theme.primary};
    border-radius: 50%;
    content: '';
    display: block;
    height: 12px;
    left: 3px;
    position: absolute;
    top: 3px;
    width: 12px;
    z-index: 1;
  }
`

const RadioInput = styled.input.attrs({
  type: 'radio',
})`
  opacity: 0;
  position: absolute;
  z-index: -1;
`

const RadioControl = styled.span`
  border: solid 1px ${props => props.theme.primary};
  border-radius: 50%;
  display: block;
  height: 20px;
  left: 0;
  position: absolute;
  top: 0;
  width: 20px;
  user-select: none;
`

export {
  FormElements as default,
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
}
