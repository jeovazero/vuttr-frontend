/** @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

type Kind = 'plus' | 'close' | 'checkmark' | 'search'

type Size = 'small' | 'medium' | 'large'

type Color = 'Ink' | 'DarkBlue' | 'Blue' | 'LightBlue' | 'Teal' | 'White'

const kinds = {
  plus: "'\f217'",
  close: "'\f129'",
  checkmark: "'\f121'",
  search: "'\f21f'"
}

const sizes = {
  small: '1rem',
  medium: '1.5rem',
  large: '2rem'
}

type Props = {
  /** Kind */
  kind: Kind,
  /** Size */
  size?: Size,
  /** Color */
  color?: Color
}

const style = ({ theme, kind, color, size }) => css`
  padding: 0;
  margin: 0;
  border: 0;
  font-weight: normal;
  font-size: ${sizes[size]};
  vertical-align: baseline;
  font-family: 'Ionicons';
  color: ${theme.color[color]};
  ::after {
    content: ${kinds[kind]};
    display: inline-block;
  }
`

const StyledIcon = styled.span`
  ${style}
`

/** Icon component */
const Icon = (props: Props) => <StyledIcon {...props} />

Icon.defaultProps = {
  size: 'small',
  color: 'Blue'
}

export default Icon
