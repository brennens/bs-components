import styled from 'styled-components'

const Button = styled.button`
  border: solid .125em;
  border-radius: .125em;
  cursor: pointer;
  font-size: 1.6rem;
  padding: .625em 1em;
`

const PrimaryButton = Button.extend`
  background: ${props => props.hollow ? 'transparent' : props.theme.primary};
  border-color: ${props => props.theme.primary};
  color: ${props => props.hollow ? props.theme.primary : props.theme.neutral.white};
`

const SecondaryButton = Button.extend`
  background: ${props => props.hollow ? 'transparent' : props.theme.secondary};
  border-color: ${props => props.theme.secondary};
  color: ${props => props.hollow ? props.theme.secondary : props.theme.neutral.white};
`

const TertiaryButton = Button.extend`
  background: ${props => props.hollow ? 'transparent' : props.theme.tertiary};
  border-color: ${props => props.theme.tertiary};
  color: ${props => props.hollow ? props.theme.tertiary : props.theme.neutral.white};
`

const QuaternaryButton = Button.extend`
  background: ${props => props.hollow ? 'transparent' : props.theme.quaternary};
  border-color: ${props => props.theme.quaternary};
  color: ${props => props.hollow ? props.theme.quaternary : props.theme.neutral.white};
`

export {
  Button as default,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  QuaternaryButton,
}
