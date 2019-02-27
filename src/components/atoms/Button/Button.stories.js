import React from 'react'
import Button from './Button'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const group = 'GROUP-ICON'
const kindOptions = ['bright', 'secondary', 'primary']
const sizeOptions = ['small', 'medium', 'large']
const prefixOptions = [null, '+']
const suffixOptions = [null, '-']

storiesOf('Atoms', module).add('Button', () => {
  const kind = select('kind', kindOptions, 'primary', group)
  const size = select('size', sizeOptions, 'medium', group)
  const label = text('label', 'Button', group)
  const prefix = select('prefix', prefixOptions, '+', group)
  const suffix = select('suffix', suffixOptions, '-', group)

  return (
    <Button
      kind={kind}
      size={size}
      prefix={prefix}
      suffix={suffix}
      onClick={action('[Button]: click')}
    >
      {label}
    </Button>
  )
})
