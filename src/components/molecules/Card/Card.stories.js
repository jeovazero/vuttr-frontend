import React from 'react'
import Card from './Card'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const group = 'GROUP-CARD'

const tool = {
  id: 1,
  title: 'Notion',
  link: 'https://notion.so',
  description:
    'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
  tags: ['organization', 'planning', 'collaboration', 'writing', 'calendar']
}

storiesOf('Molecules', module).add('Card', () => {
  const title = text('title', tool.title, group)
  const highlightTag = text('highlightTag', 'calendar', group)
  const link = text('link', tool.link, group)
  const description = text('description', tool.description, group)
  const tags = object('tags', tool.tags, group)

  return (
    <Card
      highlightTag={highlightTag}
      title={title}
      description={description}
      link={link}
      tags={tags}
      onRemove={action('[Card]: Remove')}
    />
  )
})
