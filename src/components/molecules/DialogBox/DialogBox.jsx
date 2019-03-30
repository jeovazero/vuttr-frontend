/** @flow */
/** @jsx jsx */
import type { Node } from 'react'
import styled from '@emotion/styled'
import { css, jsx, keyframes } from '@emotion/core'
import { H5, Button, Icon, Container, Modal } from '../../index'

type IconType = 'plus' | 'close' | 'checkmark' | 'search'

type Props = {
  /** A single Node child */
  children: Node,
  /** Title of box */
  title: string,
  /** The icon of title */
  titleIcon: IconType,
  /** Text for confirm button */
  confirmText?: string,
  /** Text for cancel button */
  cancelText?: string,
  /** onClose handler */
  onClose?: () => mixed,
  /** onConfirm handler */
  onConfirm?: () => mixed,
  /** onCancel handler */
  onCancel?: () => mixed,
  /** isOpen flag */
  isOpen?: boolean,
  /** className */
  className?: string
}

const showing = keyframes`
  0%{
    transform: scale(0.3);
  }
  100%{
    transform: scale(1);
  }

`

const style = ({ theme }) => css`
  padding: 0;
  border: 0;
  margin: auto;
  font-family: ${theme.fontFamily};
  display: inline-block;

  box-sizing: border-box;
  width: 480px;

  animation: ${showing} 0.25s ease;

  .vuttr__dialogbox__header {
    display: flex;
    justify-content: space-between;
    items-align: center;

    .vuttr__dialogbox__title {
      text-align: left;
      margin: 0 2rem 0 0;
    }

    .vuttr__dialogbox__close {
      cursor: pointer;
    }

    h5 {
      margin: 0 0.5rem;
      text-overflow: ellipsis;
    }
  }

  .vuttr__dialogbox__buttons {
    display: flex;
    justify-content: flex-end;
    items-align: center;

    button {
      margin: 0 0.25rem;
    }
  }

  .vuttr__dialogbox__content {
    padding: 1.5rem 1rem;
    max-height: 70vh;
    overflow-y: auto;
  }
`

const StyledDialogBox = styled.div`
  ${style}
`

/** DialogBox component */
const DialogBox = (props: Props) => {
  const {
    isOpen,
    title = '',
    titleIcon,
    confirmText = '',
    cancelText = '',
    onCancel,
    onClose,
    onConfirm,
    children,
    className
  } = props

  const isValidText = (str = '') => str && str.length > 0
  if (!isOpen) return null

  return (
    <div>
      <Modal isOpen={isOpen}>
        <StyledDialogBox className={className}>
          <Container size='small' isBlock>
            <div className='vuttr__dialogbox__header'>
              <div className='vuttr__dialogbox__title'>
                {titleIcon && (
                  <Icon kind={titleIcon} size='medium' color='Ink' />
                )}
                <H5>{title}</H5>
              </div>

              <div onClick={onClose} className='vuttr__dialogbox__close'>
                <Icon kind='close' size='small' color='Red' />
              </div>
            </div>

            <div className='vuttr__dialogbox__content'>{children}</div>

            <div className='vuttr__dialogbox__buttons'>
              {isValidText(cancelText) && (
                <Button kind='secondary' onClick={onCancel}>
                  {cancelText}
                </Button>
              )}
              {isValidText(confirmText) && (
                <Button kind='primary' onClick={onConfirm}>
                  {confirmText}
                </Button>
              )}
            </div>
          </Container>
        </StyledDialogBox>
      </Modal>
    </div>
  )
}

DialogBox.defaultProps = { isOpen: false, isBlock: false }

export default DialogBox
