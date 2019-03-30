import React from 'react'
import Loader from './Loader'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
const group = 'GROUP-LOADER'
const sizeOptions = ['small', 'medium', 'large']

storiesOf('Atoms', module).add('Loader', () => {
  const size = select('size', sizeOptions, 'medium', group)

  return <Loader size={size} />
})
