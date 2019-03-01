/** @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

type Kind =
  | 'Normal'
  | 'Secondary'
  | 'Important'
  | 'Heading'
  | 'Small'
  | 'SmallSecondary'
  | 'SmallImportant'
  | 'SmallHeading'
  | 'Smallest'
  | 'SmallestSecondary'
  | 'SmallestImportant'
  | 'SmallestHeading'

type Props = {
  /** Label */
  children: string,
  /** Kind of paragraph */
  kind: Kind,
  /** className */
  className?: string
}

const font = (weight, size, height, color) => `
  font-size: ${size};
  font-weight: ${weight};
  line-height: ${height};
  color: ${color};
`

const fontKinds = ({ color }) => ({
  Normal: font('normal', '20px', '26px', color.Ink),
  Secondary: font('normal', '20px', '26px', color.LightInk),
  Important: font('600', '20px', '26px', color.Ink),
  Heading: font('600', '20px', '26px', color.LightInk),
  Small: font('normal', '18px', '24px', color.Ink),
  SmallSecondary: font('normal', '18px', '24px', color.LightInk),
  SmallImportant: font('600', '18px', '24px', color.Ink),
  SmallHeading: font('600', '18px', '24px', color.LightInk),
  Smallest: font('normal', '16px', '22px', color.Ink),
  SmallestSecondary: font('normal', '16px', '22px', color.LightInk),
  SmallestImportant: font('600', '16px', '22px', color.Ink),
  SmallestHeading: font('600', '16px', '22px', color.LightInk)
})

const style = ({ theme, kind }) => css`
  padding: 0;
  margin: 0;
  border: 0;
  ${fontKinds(theme)[kind]}
  display: inline-block;
`

const StyledP = styled.p`
  ${style}
`

/** P component */
const P = (props: Props) => {
  const { children, className, kind } = props
  return (
    <StyledP className={className} kind={kind}>
      {children}
    </StyledP>
  )
}

P.defaultProps = {
  kind: 'Normal'
}

export default P
