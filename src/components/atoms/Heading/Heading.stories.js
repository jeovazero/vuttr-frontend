import React from 'react'
import H1 from './H1'
import H2 from './H2'
import H3 from './H3'
import H4 from './H4'
import H5 from './H5'

import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

const group = 'GROUP-HEADING'

storiesOf('Atoms', module).add('Heading', () => {
  const label1 = text(
    'Label H1',
    'The quick brown fox jumps over the lazy dog.',
    group
  )
  const label2 = text(
    'Label H2',
    'The quick brown fox jumps over the lazy dog.',
    group
  )
  const label3 = text(
    'Label H3',
    'The quick brown fox jumps over the lazy dog.',
    group
  )
  const label4 = text(
    'Label H4',
    'The quick brown fox jumps over the lazy dog.',
    group
  )
  const label5 = text(
    'Label H5',
    'The quick brown fox jumps over the lazy dog.',
    group
  )

  return (
    <div>
      <div>
        {' '}
        <H1>{label1}</H1>{' '}
      </div>
      <div>
        {' '}
        <H2>{label2}</H2>{' '}
      </div>
      <div>
        {' '}
        <H3>{label3}</H3>{' '}
      </div>
      <div>
        {' '}
        <H4>{label4}</H4>{' '}
      </div>
      <div>
        {' '}
        <H5>{label5}</H5>{' '}
      </div>
    </div>
  )
})
