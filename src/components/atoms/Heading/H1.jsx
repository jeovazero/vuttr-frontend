/** @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

type Props = {
  /** Text */
  children: string,
  /** className */
  className?: string
}

const style = ({ theme }) => css`
  padding: 0;
  margin: 0;
  border: 0;
  font-weight: 600;
  font-size: 42px;
  text-align: left;
  letter-spacing: 2px;
  line-height: 50px;
  vertical-align: baseline;
  font-family: ${theme.fontFamily};
  background: none;
  color: ${theme.color.Ink};
  display: inline-block;
`

const StyledH1 = styled.h1`
  ${style}
`

/** H1 component */
const H1 = (props: Props) => {
  const { children, className } = props
  return <StyledH1 className={className}>{children}</StyledH1>
}

H1.defaultProps = {}

export default H1
