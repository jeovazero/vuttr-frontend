import React from 'react'
import SearchBar from './SearchBar'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const group = 'GROUP-SEARCH-BAR'

storiesOf('Molecules', module).add('SearchBar', () => {
  const isSearchTags = select('isSearchTags', [true, false], true, group)
  const value = text('value', 'Value to search', group)
  const placeholder = text('placeholder', 'Search', group)

  return (
    <SearchBar
      placeholder={placeholder}
      value={value}
      isSearchTags={isSearchTags}
      isSearchTagsHandler={action('[SearchBar]: search in tags handler')}
      onChangeText={action('[SearchBar]: ChangeText')}
    />
  )
})
