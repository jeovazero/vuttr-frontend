/** @flow */
/** @jsx jsx */
import type { Node } from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
type Size = 'small' | 'medium' | 'large'

type Props = {
  /** Size */
  size: Size,
  /** Children */
  children: [Node],
  /** className */
  className?: string,
  /** isBlock */
  isBlock?: boolean
}

const paddingSizes = {
  small: '1.5rem',
  medium: '2rem',
  large: '2.5rem'
}

const style = ({ theme, size, isBlock }) => css`
  padding: ${paddingSizes[size]};
  margin: 0;
  border: 2px solid ${theme.color.DarkerWhite};
  font: inheit;
  vertical-align: baseline;
  background-color: ${theme.color.White};
  display: ${isBlock ? 'block' : 'inline-block'};
  border-radius: 4px;
  box-shadow: 0 10px 44px -10px rgba(0, 0, 0, 0.1);
`

const StyledContainer = styled.div`
  ${style}
`

/** Container component */
const Container = (props: Props) => {
  const { size, children, className, isBlock } = props

  return (
    <StyledContainer size={size} className={className} isBlock={isBlock}>
      {children}
    </StyledContainer>
  )
}

Container.defaultProps = {
  size: 'medium',
  isBlock: false
}

export default Container
