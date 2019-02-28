/** @flow */
/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { Checkbox, Input, P } from '../../index'

type Props = {
  /** Placeholder of input search */
  placeholder: string,
  /** Value of input search */
  value: string,
  /** Flag to search in only tags */
  isSearchTags: boolean,
  /** Hadler to Flag of search in only tags */
  isSearchTagsHandler: () => mixed,
  /** onChange handler of input search */
  onChangeText: () => mixed
}

const style = ({ theme }) => css`
  padding: 0;
  border: 0;
  position: relative;
  margin: 0;
  font: inhehit
  font-family: ${theme.fontFamily};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  div {
    margin: 0 0.5rem 0 1rem;
  }
`

const StyledSearchBar = styled.div`
  ${style}
`

/** SearchBar component */
const SearchBar = (props: Props) => {
  const {
    placeholder = '',
    value = '',
    isSearchTags,
    isSearchTagsHandler,
    onChangeText
  } = props

  return (
    <StyledSearchBar>
      <Input
        prefixIcon='search'
        onChange={onChangeText}
        value={value}
        color='Ink'
        placeholder={placeholder}
      />
      <Checkbox
        isChecked={isSearchTags}
        onCheck={isSearchTagsHandler}
        color='Ink'
      />
      <P>search in tags only</P>
    </StyledSearchBar>
  )
}

SearchBar.defaultProps = {}

export default SearchBar
