/** @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

type Props = {
  /** Text */
  children: string
}

const style = ({ theme }) => css`
  padding: 0;
  margin: 0;
  border: 0;
  font-weight: 600;
  font-size: 26px;
  text-align: left;
  letter-spacing: 2px;
  line-height: 32px;
  vertical-align: baseline;
  font-family: ${theme.fontFamily};
  background: none;
  color: ${theme.color.Ink};
  display: inline-block;
`

const StyledH4 = styled.h4`
  ${style}
`

/** H4 component */
const H4 = (props: Props) => {
  const { children } = props
  return <StyledH4 {...props}>{children}</StyledH4>
}

H4.defaultProps = {}

export default H4
