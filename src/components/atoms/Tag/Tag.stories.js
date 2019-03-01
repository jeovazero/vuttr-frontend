import React from 'react'
import Tag from './Tag'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const group = 'GROUP-TAG'
const sizeOptions = ['small', 'medium', 'large']
const colorOptions = [
  'Ink',
  'DarkBlue',
  'Blue',
  'LightBlue',
  'Teal',
  'Yellow',
  'Purple',
  'Green',
  'Red',
  'White'
]

storiesOf('Atoms', module).add('Tag', () => {
  const size = select('size', sizeOptions, 'medium', group)
  const color = select('color', colorOptions, 'Blue', group)
  const label = text('Label', 'Tag', group)

  return (
    <Tag
      color={color}
      size={size}
      label={label}
      onClick={action('[Tag]: clicked!')}
    />
  )
})
