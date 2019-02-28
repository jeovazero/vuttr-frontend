// @flow
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
  | 'DarkRed'
  | 'Red'
  | 'LightRed'
  | 'White'
  | 'DarkWhite'

type Props = {
  /** check state */
  isChecked: boolean,
  /** Size */
  size: Size,
  /** Color */
  color: Color,
  /** onCheck handler */
  onCheck: () => mixed
}

const fontSize = {
  small: '0.7rem',
  medium: '1rem',
  large: '1.5rem'
}

const style = ({ theme, isChecked, size, color }) => css`
  padding: 0;
  margin: 0;
  border: 2px solid;
  font-family: 'Ionicons';
  font-weight: normal;
  font-size: ${fontSize[size]};
  vertical-align: baseline;
  font-family: 'Ionicons';
  width: ${fontSize[size]};
  height: ${fontSize[size]};
  text-align: center;
  :after {
    content: ${isChecked ? '"\f121"' : ''};
  }
  display: inline-block;
  color: ${theme.color[color]};
  cursor: pointer;
`

const StyledCheckbox = styled.div`
  ${style}
`

const Checkbox = (props: Props) => {
  const { onCheck } = props
  return <StyledCheckbox onClick={onCheck} {...props} />
}

Checkbox.defaultProps = {
  size: 'medium',
  isChecked: false,
  color: 'Blue'
}

export default Checkbox
