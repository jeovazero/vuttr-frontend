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
  font-size: 24px;
  text-align: left;
  letter-spacing: 2px;
  line-height: 30px;
  vertical-align: baseline;
  font-family: ${theme.fontFamily};
  background: none;
  color: ${theme.color.Ink};
  display: inline-block;
`

const StyledH5 = styled.h5`
  ${style}
`

/** H5 component */
const H5 = (props: Props) => {
  const { children, className } = props
  return <StyledH5 className={className}>{children}</StyledH5>
}

H5.defaultProps = {}

export default H5
