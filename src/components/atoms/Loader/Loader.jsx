/** @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx, keyframes } from '@emotion/core'
type Size = 'small' | 'medium' | 'large'

type Props = {
  /** Size of loader */
  size: Size,
  /** className */
  className?: string
}

const sizes = {
  small: '2rem',
  medium: '3rem',
  large: '4rem'
}

const borderSize = {
  small: '4px',
  medium: '8px',
  large: '12px'
}

const rotate = keyframes`
  0%{
    transform: rotateZ(0deg);
  }
  100%{
    transform: rotateZ(360deg);
  }
`

const style = ({ theme, size }) => css`
  padding: 0;
  margin: 0;
  display: block;
  text-align: center;

  .vuttr__loader-wrapper {
    position: relative;
    display: inline-block;
    width: ${sizes[size]};
    height: ${sizes[size]};
  }

  .vuttr__loader-arc {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-style: solid;
    border: ${borderSize[size]} solid;
    border-radius: 50%;
    border-color: ${theme.color.Blue} transparent transparent;
    animation: ${rotate} 1s ease-in-out infinite;
  }

  .vuttr__loader-arc:nth-of-type(1) {
    animation-delay: 0.1s;
  }
  .vuttr__loader-arc:nth-of-type(3) {
    animation-delay: 0.2s;
  }
`

const StyledLoader = styled.div`
  ${style}
`

/** Loader component */
const Loader = (props: Props) => {
  const { size, className } = props

  return (
    <StyledLoader size={size} className={className}>
      <div className='vuttr__loader-wrapper'>
        <div className='vuttr__loader-arc' />
        <div className='vuttr__loader-arc' />
        <div className='vuttr__loader-arc' />
      </div>
    </StyledLoader>
  )
}

Loader.defaultProps = {
  size: 'medium'
}

export default Loader
