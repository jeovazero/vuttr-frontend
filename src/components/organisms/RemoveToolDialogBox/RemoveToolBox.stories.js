import React from 'react'
import RemoveToolDialogBox from './RemoveToolDialogBox'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { select, text } from '@storybook/addon-knobs'

const group = 'GROUP-ADDTOOL-BOX'

storiesOf('Organisms', module).add('RemoveToolDialogBox', () => {
  const isOpen = select('isOpen', [true, false], true, group)
  const itemName = text('itemName', 'Item Name', group)

  return (
    <RemoveToolDialogBox
      isOpen={isOpen}
      onConfirm={action('[RemoveToolDialogBox]: Confirm')}
      onClose={action('[RemoveToolDialogBox]: Close')}
      onCancel={action('[RemoveToolDialogBox]: Cancel')}
      itemName={itemName}
    />
  )
})
