/** @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

type Size = 'small' | 'medium' | 'large'
type Icon = 'plus' | 'close' | 'checkmark' | 'search'
type Color = 'Ink' | 'DarkBlue' | 'Blue' | 'Teal'

const sizes = {
  small: '0.75rem',
  medium: '1rem',
  large: '1.5rem'
}

const icons = {
  plus: "'\f217'",
  close: "'\f129'",
  checkmark: "'\f121'",
  search: "'\f21f'"
}

type Props = {
  /** prefix */
  prefixIcon?: Icon,
  /** Size */
  size?: Size,
  /** Color */
  color?: Color,
  /** onChange handler */
  onChange?: (value: string) => mixed,
  /** onFocus handler */
  onFocus?: () => mixed,
  /** onBlur handler */
  onBlur?: () => mixed,
  /** Value */
  value?: string,
  /** Placeholder */
  placeholder?: string,
  /** className */
  className?: string,
  /** isFlex */
  isFlex: false
}

const style = ({ theme, prefixIcon, color, size, isFlex }) => css`
  padding: 0.5rem 1rem;
  margin: 0;
  border: 1px solid ${theme.color.LighterInk};
  font-weight: normal;
  font-size: ${sizes[size]};
  vertical-align: baseline;
  font-family: ${theme.fontFamily};
  background-color: ${theme.color.DarkWhite};
  color: ${theme.color[color]};
  ::before {
    padding: 0 0.5rem;
    font-family: 'Ionicons';
    content: ${prefixIcon ? icons[prefixIcon] : 'none'};
    display: inline-block;
  }
  display: ${isFlex ? 'flex' : 'inline-block'};
  border-radius: 20px;
  input {
    font-size: ${sizes[size]};
    font-weight: normal;
    font-family: ${theme.fontFamily};
    color: ${theme.color[color]};
    border: 0;
    margin: 0;
    padding: 0;
    width: ${isFlex ? '100%' : 'auto'};
    background-color: ${theme.color.DarkWhite};
  }
`

const StyledInput = styled.span`
  ${style}
`

/** Input component */
const Input = (props: Props) => {
  const {
    onChange,
    value,
    onBlur,
    onFocus,
    placeholder,
    className,
    color,
    size,
    prefixIcon,
    isFlex
  } = props
  return (
    <StyledInput
      color={color}
      size={size}
      prefixIcon={prefixIcon}
      className={className}
      isFlex={isFlex}
    >
      <input
        onChange={e => onChange && onChange(e.target.value)}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
      />
    </StyledInput>
  )
}

Input.defaultProps = {
  size: 'medium',
  color: 'Ink',
  isFlex: false
}

export default Input
