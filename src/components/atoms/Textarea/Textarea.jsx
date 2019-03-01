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
  onChange?: () => mixed,
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
  border: 1px solid ${theme.color.LighterInk};
  vertical-align: baseline;
  background-color: ${theme.color.DarkWhite};
  border-radius: 20px;

  textarea {
    font-weight: bold;
    font-size: ${sizes[size]};
    font-family: ${theme.fontFamily};
    color: ${theme.color[color]};
    background-color: ${theme.color.DarkWhite};
    display: block;
    resize: none;
    width: 100%;
    border: none;
    overflow: auto;
    min-height: ${heights[size]};
  }
`

const StyledTextarea = styled.div`
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
    <StyledTextarea size={size} color={color} className={className}>
      <textarea
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
      />
    </StyledTextarea>
  )
}

Textarea.defaultProps = {
  size: 'medium',
  color: 'Ink'
}

export default Textarea
