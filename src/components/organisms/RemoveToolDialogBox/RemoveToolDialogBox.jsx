/** @flow */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { DialogBox, P } from '../../index'

type Props = {
  /** onClose handler */
  onClose?: () => mixed,
  /** onCancel handler */
  onCancel?: () => mixed,
  /** onConfirm handler */
  onConfirm: () => mixed,
  /** isOpen flag */
  isOpen: boolean,
  className?: string,
  /** Item name */
  itemName: string
}

/** RemoveToolDialogBox component */
const RemoveToolDialogBox = (props: Props) => {
  const {
    isOpen,
    onClose,
    onConfirm,
    className,
    onCancel,
    itemName = ''
  } = props

  if (!isOpen) return null

  return (
    <DialogBox
      isOpen={isOpen}
      title='Remove tool'
      titleIcon='close'
      confirmText='Yes, remove'
      cancelText='Cancel'
      onCancel={onCancel}
      onConfirm={onConfirm}
      onClose={onClose}
      isBlock
      className={className}
    >
      <P>
        Are you sure you want to remove <b>{itemName}</b>
      </P>
    </DialogBox>
  )
}

RemoveToolDialogBox.defaultProps = { isOpen: false }

export default RemoveToolDialogBox
