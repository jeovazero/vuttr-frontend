/** @flow */
/** @jsx jsx */
import type { Node } from 'react'
import styled from '@emotion/styled'
import { css, jsx, keyframes } from '@emotion/core'

type Props = {
  /** Flag isOpen */
  isOpen: boolean,
  /** className */
  className?: string,
  /** A html Node */
  children?: Node
}

const showing = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`

const style = ({ theme, isOpen }) => css`
  animation: ${showing} 1s ease-in-out;
  display: ${isOpen ? 'flex' : 'none'};
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: auto;
  top: 0;
  left: 0;
  margin: 0;
  border: 0;
  background-color: rgba(0, 0, 0, 0.25);
`

const StyledModal = styled.div`
  ${style}
`

/** Modal component */
const Modal = (props: Props) => {
  const { isOpen, className, children } = props
  return (
    <StyledModal isOpen={isOpen} className={className}>
      {children}
    </StyledModal>
  )
}

Modal.defaultProps = {
  isOpen: false
}

export default Modal
