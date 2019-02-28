import React from 'react'
import Container from './Container'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
const group = 'GROUP-CONTAINER'
const sizeOptions = ['small', 'medium', 'large']

storiesOf('Atoms', module).add('Container', () => {
  const size = select('size', sizeOptions, 'medium', group)

  return (
    <Container size={size}>
      <div>I'm a example of child</div>
      <div>I'm a example of child</div>
    </Container>
  )
})
