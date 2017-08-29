import React from 'react'

import { storiesOf } from '@storybook/react'

import Button from './index'

storiesOf('Button', module)
  .add('Default', () => <Button>Button</Button>)
  .add('Colors', () => (
    <div>
      <Button
        m={1}
        color='black'
        bg='red'
        children='Red'
      />
      <Button
        m={1}
        bg='orange'
        children='Orange'
      />
      <Button
        m={1}
        bg='yellow'
        children='Yellow'
      />
      <Button
        m={1}
        bg='green'
        children='Green'
      />
    </div>
  ))