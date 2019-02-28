/** @flow */
/** @jsx jsx */
import type { Node } from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

type Props = {
  /** Children */
  children: [Node]
}

const paddingSizes = {
  small: '1.5rem',
  medium: '2rem',
  large: '2.5rem'
}

const style = ({ theme, size }) => css`
  padding: ${paddingSizes[size]};
  margin: 0;
  border: 2px solid ${theme.color.DarkerWhite};
  font: inheit;
  vertical-align: baseline;
  background-color: ${theme.color.White};
  display: inline-block;
  border-radius: 4px;
  box-shadow: 0 10px 44px -10px rgba(0, 0, 0, 0.1);
`

const StyledContainer = styled.div`
  ${style}
`

/** Container component */
const Container = (props: Props) => {
  const { size, children } = props

  return <StyledContainer size={size}>{children}</StyledContainer>
}

Container.defaultProps = {
  size: 'medium'
}

export default Container
