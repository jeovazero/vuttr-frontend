import React from 'react'
import AddToolDialogBox from './AddToolDialogBox'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { select } from '@storybook/addon-knobs'

const group = 'GROUP-ADDTOOL-BOX'

storiesOf('Organisms', module).add('AddToolDialogBox', () => {
  const isOpen = select('isOpen', [true, false], true, group)

  return (
    <AddToolDialogBox
      isOpen={isOpen}
      onConfirm={action('[AddToolDialogBox]: Confirm')}
      onClose={action('[AddToolDialogBox]: Close')}
    />
  )
})
