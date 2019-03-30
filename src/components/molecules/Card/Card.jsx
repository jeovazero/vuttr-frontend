/** @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { H5, P, Icon, Container, Tag } from '../../index'

type Props = {
  /** Title */
  title: string,
  /** Description */
  description: string,
  /** Link */
  link: string,
  /** List of tags */
  tags: string[],
  /** Tag to hightlight */
  highlightTag: string,
  /** onRemove handler */
  onRemove?: () => mixed,
  /** className */
  className?: string
}

const style = ({ theme }) => css`
  padding: 0;
  border: 0;
  margin: 0;
  position: relative;
  font: inherit;
  display: block;
  box-sizing: border-box;

  .vuttr__card__header {
    display: flex;
    justify-content: space-between;

    .vuttr__card__close {
      * {
        margin: 0 0.25rem;
      }
      cursor: pointer;
    }
  }

  .vuttr__card__description {
    padding: 1rem 0;
  }

  .vuttr__card__tags {
    * {
      margin: 0.25rem;
    }
    :nth-child(1) {
      margin: 0;
    }
  }
  a h5 {
    text-decoration-line: underline;
    text-decoration-style: dashed;
  }
`

const StyledCard = styled.div`
  ${style}
`

/** Card component */
const Card = (props: Props) => {
  const {
    title,
    description,
    link,
    tags,
    onRemove,
    className,
    highlightTag
  } = props

  return (
    <StyledCard className={className}>
      <Container size='medium' isBlock>
        <div className='vuttr__card__header'>
          <div className='vuttr__dialogbox__title'>
            <a href={link}>
              <H5>{title}</H5>
            </a>
          </div>
          <div onClick={onRemove} className='vuttr__card__close'>
            <Icon kind='close' size='small' color='Red' />
            <P kind='Small'>Remove</P>
          </div>
        </div>

        <div className='vuttr__card__description'>
          <P kind='Small'>{description}</P>
        </div>

        <div className='vuttr__card__tags'>
          {tags.map((tag, i) => (
            <Tag
              label={tag}
              key={i}
              color={tag === highlightTag ? 'Yellow' : 'Blue'}
            />
          ))}
        </div>
      </Container>
    </StyledCard>
  )
}

Card.defaultProps = {}

export default Card
