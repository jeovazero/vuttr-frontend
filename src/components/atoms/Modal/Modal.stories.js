import React from 'react'
import Modal from './Modal'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'

const group = 'GROUP-MODAL'

storiesOf('Atoms', module).add('Modal', () => {
  const isOpen = select('isOpen', [false, true], true, group)

  return <Modal isOpen={isOpen} />
})
