/** @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

type Size = 'small' | 'medium' | 'large'
type Color = 'Ink' | 'DarkBlue' | 'Blue' | 'Teal'

const sizes = {
  small: '0.75rem',
  medium: '1rem',
  large: '1.25rem'
}

const heights = {
  small: '3rem',
  medium: '5rem',
  large: '7rem'
}

type Props = {
  /** Size */
  size?: Size,
  /** Color */
  color?: Color,
  /** onChange handler */
  onChange?: (text: string) => mixed,
  /** onFocus handler */
  onFocus?: () => mixed,
  /** onBlur handler */
  onBlur?: () => mixed,
  /** Value */
  value?: string,
  /** Placeholder */
  placeholder?: string,
  /** className */
  className?: string
}

const style = ({ theme, color, size }) => css`
  padding: 1rem 1.2rem;
  margin: 0;
  vertical-align: baseline;
  background-color: ${theme.color.DarkWhite};
  box-sizing: border-box;
  font-weight: bold;
  font-size: ${sizes[size]};
  font-family: ${theme.fontFamily};
  color: ${theme.color[color]};
  background-color: ${theme.color.DarkWhite};
  display: block;
  resize: none;
  width: 100%;
  overflow: auto;
  min-height: ${heights[size]};
  border: 1px solid ${theme.color.MostDarkestWhite};
  border-radius: 20px;
  :hover {
    background-color: ${theme.color.DarkestWhite};
  }
  :focus {
    background-color: ${theme.color.DarkerWhite};
  }
`

const StyledTextarea = styled.textarea`
  ${style}
`

/** Textarea component */
const Textarea = (props: Props) => {
  const {
    onChange,
    value,
    onBlur,
    onFocus,
    placeholder,
    size,
    color,
    className
  } = props
  return (
    <StyledTextarea
      size={size}
      color={color}
      className={className}
      onChange={e => onChange && onChange(e.target.value)}
      value={value}
      onBlur={onBlur}
      onFocus={onFocus}
      placeholder={placeholder}
    />
  )
}

Textarea.defaultProps = {
  size: 'medium',
  color: 'Ink'
}

export default Textarea
