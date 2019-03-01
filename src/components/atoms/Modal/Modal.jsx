/** @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

type Props = {
  /** Flag isOpen */
  isOpen: boolean,
  /** className */
  className?: string
}

const style = ({ theme, isOpen }) => css`
  display: ${isOpen ? 'block' : 'none'};
  position: fixed;
  height: 100vh;
  width: 100%;
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
  const { isOpen, className } = props
  return <StyledModal isOpen={isOpen} className={className} />
}

Modal.defaultProps = {
  isOpen: false
}

export default Modal
