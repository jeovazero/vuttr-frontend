import React from 'react'
import P from './P'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs'

const group = 'GROUP-TAG'
const kindOptions = [
  'Normal',
  'Secondary',
  'Important',
  'Heading',
  'Small',
  'SmallSecondary',
  'SmallImportant',
  'SmallHeading',
  'Smallest',
  'SmallestSecondary',
  'SmallestImportant',
  'SmallestHeading'
]

storiesOf('Atoms', module).add('Paragraph', () => {
  const kind = select('kind', kindOptions, 'Normal', group)
  const label = text(
    'Label',
    'The quick brown fox jumps over the lazy dog.',
    group
  )

  return <P kind={kind}>{label}</P>
})
