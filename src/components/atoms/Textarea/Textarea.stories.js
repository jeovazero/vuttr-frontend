import React from 'react'
import Textarea from './Textarea'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const group = 'GROUP-INPUT'
const sizeOptions = ['small', 'medium', 'large']
const colorOptions = ['Ink', 'DarkBlue', 'Blue', 'Teal']

storiesOf('Atoms', module).add('Textarea', () => {
  const size = select('size', sizeOptions, 'medium', group)
  const color = select('color', colorOptions, 'Blue', group)
  const value = text('Value', 'value', group)
  const placeholder = text('Placeholder', 'Digite...', group)
  return (
    <Textarea
      size={size}
      color={color}
      value={value}
      onChange={action('[Textarea]: onChange!')}
      onBlur={action('[Textarea]: onBlur!')}
      onFocus={action('[Textarea]: onFocus!')}
      placeholder={placeholder}
    />
  )
})
