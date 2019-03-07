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
  display: ${isFlex ? 'flex' : 'inline-block'};
  align-items: center;
  margin: 0;

  .vuttr__input-wrapper {
    position: relative;
    display: ${isFlex ? 'flex' : 'inline-block'};
    width: ${isFlex ? '100%' : 'auto'};

    .vuttr__input-icon {
      top: 0.5rem;
      left: 1.25rem;
      margin: auto;
      position: absolute;
      :before {
        font-family: 'Ionicons';
        content: ${prefixIcon ? icons[prefixIcon] : 'none'};
        display: inline-block;
      }
    }

    input {
      vertical-align: baseline;
      font-size: ${sizes[size]};
      font-weight: normal;
      border: 1px solid ${theme.color.MostDarkestWhite};
      padding: 0.5rem 1rem 0.5rem ${prefixIcon ? '2.5rem' : '1rem'};
      font-size: ${sizes[size]};
      font-weight: normal;
      font-family: ${theme.fontFamily};
      color: ${theme.color[color]};
      margin: 0;
      width: ${isFlex ? '100%' : 'auto'};
      background-color: ${theme.color.DarkWhite};
      border-radius: 20px;
      :hover {
        background-color: ${theme.color.DarkestWhite};
      }

      :focus {
        background-color: ${theme.color.DarkerWhite};
      }
    }
  }
`

const StyledInput = styled.div`
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
      <div className='vuttr__input-wrapper'>
        <span className='vuttr__input-icon' />
        <input
          onChange={e => onChange && onChange(e.target.value)}
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
        />
      </div>
    </StyledInput>
  )
}

Input.defaultProps = {
  size: 'medium',
  color: 'Ink',
  isFlex: false
}

export default Input
