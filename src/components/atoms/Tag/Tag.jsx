/** @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

type Size = 'small' | 'medium' | 'large'

type Color =
  | 'Ink'
  | 'DarkBlue'
  | 'Blue'
  | 'LightBlue'
  | 'Teal'
  | 'Yellow'
  | 'Purple'
  | 'Green'
  | 'Red'
  | 'White'

type Props = {
  /** Label */
  label: string,
  /** Size */
  size?: Size,
  /** Color */
  color?: Color,
  /** onClick handler */
  onClick?: () => mixed,
  /** className */
  className?: string
}

const paddingSizes = {
  small: '0.125rem 0.75rem',
  medium: '0.25rem 1.2rem',
  large: '0.375rem 1.5rem'
}

const fontSizes = {
  small: '0.75rem',
  medium: '1rem',
  large: '1.25rem'
}

const textColors = ({ color }) => ({
  Ink: color.White,
  DarkBlue: color.White,
  Blue: color.White,
  LightBlue: color.White,
  Teal: color.White,
  White: color.LightInk,
  Yellow: color.White,
  Purple: color.White,
  Green: color.White,
  Red: color.White
})

const style = ({ theme, color, size }) => css`
  padding: ${paddingSizes[size]};
  margin: 0;
  border: 0;
  font-weight: bold;
  font-size: ${fontSizes[size]};
  vertical-align: baseline;
  font-family: ${theme.fontFamily};
  background-color: ${theme.color[color]};
  color: ${textColors(theme)[color]};
  display: inline-block;
  cursor: pointer;
  border-radius: 50px;
`

const StyledTag = styled.span`
  ${style}
`

/** Tag component */
const Tag = (props: Props) => {
  const { label, className, color, size } = props
  return (
    <StyledTag className={className} color={color} size={size}>
      {label}
    </StyledTag>
  )
}

Tag.defaultProps = {
  size: 'medium',
  color: 'Blue'
}

export default Tag
