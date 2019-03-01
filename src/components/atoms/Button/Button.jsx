// @flow
/** @jsx jsx */
import type { Node } from 'react' // for React.node
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

type Kind = 'primary' | 'secondary' | 'bright'

type Size = 'small' | 'medium' | 'large'

const kinds = ({ color }) => ({
  primary: {
    gradient: color.GradientBlue,
    active: color.DarkBlue,
    text: color.White
  },
  secondary: {
    gradient: color.GradientYellow,
    active: color.DarkRed,
    text: color.White
  },
  bright: {
    normal: color.White,
    active: color.DarkestWhite,
    hover: color.DarkerWhite,
    text: color.LighterInk,
    textHover: color.LightInk
  }
})

const paddingSize = {
  small: '0.5rem 1rem',
  medium: '0.75rem 2rem',
  large: '0.75rem 2.5rem'
}

const fontSize = {
  small: '0.75rem',
  medium: '1rem',
  large: '1.25rem'
}

type Props = {
  /** Prefix component */
  prefix?: Node,
  /** Suffix component */
  suffix?: Node,
  /** Kind */
  kind?: Kind,
  /** Size */
  size?: Size,
  /** Label of button */
  children: string,
  /** onClick handler */
  onClick?: () => mixed,
  /** className */
  className?: string
}

const style = ({ theme, kind, size }) => {
  const currentKind = kinds(theme)[kind]

  const hover = currentKind.hover
    ? `
      background-color: ${currentKind.hover};
      color: ${currentKind.textHover};
    `
    : `background-position: 100%;`

  const background = currentKind.gradient
    ? `
      background-image: linear-gradient(to right, ${currentKind.gradient});
      background-size: 200%;
    `
    : `background-color: ${currentKind.normal};`

  return css`
      padding: ${paddingSize[size]};
      margin: 0;
      border: 0;
      border-radius: 50px;
      display: inline-block;
      text-align: left;
      font-family: ${theme.fontFamily};
      font-weight: 600;
      cursor: pointer;
      font-size: ${fontSize[size]};
      vertical-align: baseline;
      ${background}
      color: ${currentKind.text};
      box-shadow: 0px 10px 40px -12px rgba(0,0,0,0.25);
      :hover{
        ${hover}
        transition: background 1s;
      }
      :active{
        background-image: none;
        transition: none;
        background-color: ${currentKind.active};
      }
      span.vuttr__button-label{
        margin: 0 0.25rem;
      }
      * {
        display: inline-block;
      }
    `
}

const StyledButton = styled.button`
  ${style}
`

/** Button Component  */
const Button = (props: Props) => {
  const { onClick, prefix, suffix, children, kind, size, className } = props
  return (
    <StyledButton
      onClick={onClick}
      kind={kind}
      size={size}
      className={className}
    >
      {prefix}
      <span className='vuttr__button-label'>{children}</span>
      {suffix}
    </StyledButton>
  )
}

Button.defaultProps = {
  size: 'medium',
  kind: 'primary'
}

export default Button
