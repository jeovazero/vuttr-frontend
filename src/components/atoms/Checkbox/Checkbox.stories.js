import React from 'react'
import Checkbox from './Checkbox'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const group = 'GROUP-CHECKBOX'
const sizeOptions = ['small', 'medium', 'large']
const colorOptions = [
  'Ink',
  'DarkBlue',
  'Blue',
  'LightBlue',
  'Teal',
  'DarkRed',
  'Red',
  'LightRed',
  'White',
  'DarkWhite'
]

storiesOf('Atoms', module).add('Checkbox', () => {
  const isChecked = select('isChecked', [true, false], false, group)
  const size = select('size', sizeOptions, 'medium', group)
  const color = select('color', colorOptions, 'Blue', group)

  return (
    <Checkbox
      size={size}
      color={color}
      onCheck={action('Checked!')}
      isChecked={isChecked}
    />
  )
})
