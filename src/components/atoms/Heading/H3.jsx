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
  font-size: 30px;
  text-align: left;
  letter-spacing: 2px;
  line-height: 36px;
  vertical-align: baseline;
  font-family: ${theme.fontFamily};
  background: none;
  color: ${theme.color.Ink};
  display: inline-block;
`

const StyledH3 = styled.h3`
  ${style}
`

/** H3 component */
const H3 = (props: Props) => {
  const { children, className } = props
  return <StyledH3 className={className}>{children}</StyledH3>
}

H3.defaultProps = {}

export default H3
