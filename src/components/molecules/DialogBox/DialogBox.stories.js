import React from 'react'
import DialogBox from './DialogBox'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const group = 'GROUP-DIALOG-BOX'
const iconOptions = [null, 'plus', 'close', 'checkmark', 'search']

storiesOf('Molecules', module).add('DialogBox', () => {
  const isOpen = select('isOpen', [true, false], true, group)
  const confirmText = text('confirmText', 'Confirm', group)
  const cancelText = text('cancelText', 'Cancel', group)
  const titleIcon = select('titleIcon', iconOptions, 'checkmark', group)
  const title = text('Title', 'Dialog Box', group)

  return (
    <DialogBox
      isOpen={isOpen}
      confirmText={confirmText}
      cancelText={cancelText}
      title={title}
      titleIcon={titleIcon}
      onConfirm={action('[DialogBox]: Confirm')}
      onCancel={action('[DialogBox]: Cancel')}
      onClose={action('[DialogBox]: Close')}
    >
      <div>The quick brown fox jumps over the lazy dog.</div>
    </DialogBox>
  )
})
