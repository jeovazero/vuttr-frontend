import React from 'react'
import Icon from './Icon'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'

const group = 'GROUP-ICON'
const kindOptions = ['plus', 'checkmark', 'close', 'search']
const sizeOptions = ['small', 'medium', 'large']
const colorOptions = ['Ink', 'DarkBlue', 'Blue', 'LightBlue', 'Teal', 'White']

storiesOf('Atoms', module).add('Icon', () => {
  const kind = select('kind', kindOptions, 'plus', group)
  const size = select('size', sizeOptions, 'small', group)
  const color = select('color', colorOptions, 'Blue', group)

  return <Icon kind={kind} size={size} color={color} />
})
