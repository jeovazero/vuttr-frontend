import React from 'react'
import Input from './Input'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const group = 'GROUP-INPUT'
const iconOptions = [null, 'plus', 'checkmark', 'close', 'search']
const sizeOptions = ['small', 'medium', 'large']
const colorOptions = ['Ink', 'DarkBlue', 'Blue', 'Teal']

storiesOf('Atoms', module).add('Input', () => {
  const icon = select('prefixIcon', iconOptions, null, group)
  const size = select('size', sizeOptions, 'medium', group)
  const color = select('color', colorOptions, 'Ink', group)
  const isBlock = select('isBlock', [false, true], false, group)
  const value = text('Value', 'value', group)
  const placeholder = text('Placeholder', 'Digite...', group)
  return (
    <Input
      prefixIcon={icon}
      size={size}
      color={color}
      value={value}
      onChange={action('[Input]: onChange!')}
      onBlur={action('[Input]: onBlur!')}
      onFocus={action('[Input]: onFocus!')}
      placeholder={placeholder}
      isBlock={isBlock}
    />
  )
})
