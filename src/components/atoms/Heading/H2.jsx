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
  font-size: 36px;
  text-align: left;
  letter-spacing: 2px;
  line-height: 40px;
  vertical-align: baseline;
  font-family: ${theme.fontFamily};
  background: none;
  color: ${theme.color.Ink};
  display: inline-block;
`

const StyledH2 = styled.h2`
  ${style}
`

/** H2 component */
const H2 = (props: Props) => {
  const { children, className } = props
  return <StyledH2 className={className}>{children}</StyledH2>
}

H2.defaultProps = {}

export default H2
