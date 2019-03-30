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
  onChangeText: () => mixed,
  /** className */
  className?: string
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

  .vuttr__searchbar-item{
    margin: 0 1rem 0 0;
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
    onChangeText,
    className
  } = props

  return (
    <StyledSearchBar className={className}>
      <Input
        prefixIcon='search'
        onChange={onChangeText}
        value={value}
        color='Ink'
        placeholder={placeholder}
        className='vuttr__searchbar-item'
      />
      <Checkbox
        isChecked={isSearchTags}
        onCheck={isSearchTagsHandler}
        color='Ink'
        className='vuttr__searchbar-item'
      />
      <P>search in tags only</P>
    </StyledSearchBar>
  )
}

SearchBar.defaultProps = {}

export default SearchBar
