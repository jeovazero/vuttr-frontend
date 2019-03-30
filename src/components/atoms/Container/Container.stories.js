import React from 'react'
import Container from './Container'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
const group = 'GROUP-CONTAINER'
const sizeOptions = ['small', 'medium', 'large']

storiesOf('Atoms', module).add('Container', () => {
  const size = select('size', sizeOptions, 'medium', group)
  const isBlock = select('isBlock', [false, true], false, group)

  return (
    <Container size={size} isBlock={isBlock}>
      <div>I'm a example of child</div>
      <div>I'm a example of child</div>
    </Container>
  )
})
