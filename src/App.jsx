// @flow
/** @jsx jsx */
import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { css, jsx, Global } from '@emotion/core'
import theme from './theme.js'
import { ThemeProvider } from 'emotion-theming'
import {
  H1,
  H3,
  SearchBar,
  Button,
  Card,
  Icon,
  AddToolDialogBox,
  RemoveToolDialogBox
} from './components/index.js'
import apiclient from '../helpers/apiclient'

type Props = {
  className: string
}

const globalStyle = css`
  body {
    padding: 0;
    margin: 0;
  }
`

const StyledApp = styled.div`
  background-color: white;
`

const Wrapper = styled.div`
  margin: auto;
  width: 648px;
  position: relative;
  padding: 2rem 0rem 0rem;
`

const VSpacing = styled.div`
  padding: 1rem 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
`

const ListWrapper = styled.div`
  padding: 0.5rem 0;
  margin: 0;
  display: flex;
  flex-direction: collumn;
  justify-content: flex-start;
  flex-wrap: wrap;
`

const VSmallSpacing = styled.div`
  padding: 0.5rem 0;
  margin: 0;
  width: 100%;
`

const App = ({ className }: Props) => {
  const [isTagsLike, setIsTagsLike] = useState(false)
  const [query, setQuery] = useState('')
  const highlightTag = isTagsLike ? query : ''

  const [tools, setTools] = useState([])
  const [newTool, setNewTool] = useState({})

  const [idDeleteTool, setIdDeleteTool] = useState(-1)
  const [isDeleteTool, setIsDeleteTool] = useState(false)
  const [isGetTools, setIsGetTools] = useState(true)

  const [isOpenAdd, setIsOpenAdd] = useState(false)
  const [isOpenRemove, setIsOpenRemove] = useState(false)

  useEffect(() => {
    if (idDeleteTool >= 0) {
      apiclient.deleteTool({ id: idDeleteTool }).then(response => {
        setQuery('')
        setIsTagsLike(false)
        setIsGetTools(true)
        setIsDeleteTool(false)
        setIsOpenRemove(false)
      })
    }
  }, [isDeleteTool])

  useEffect(() => {
    if (Object.keys(newTool).length > 0) {
      const tool = {
        ...newTool,
        tags: newTool.tags
          .trim()
          .replace(/\s{2,}/g, ' ')
          .split(' ')
      }
      apiclient.addTool({ tool }).then(response => {
        setQuery('')
        setIsTagsLike(false)
        setIsGetTools(true)
        setIsDeleteTool(false)
        setIsOpenAdd(false)
      })
    }
  }, [newTool])

  useEffect(() => {
    apiclient.getTools({ query, isTagsLike }).then(response => {
      setTools(response)
      setIsGetTools(false)
    })
  }, [isGetTools, query, isTagsLike])

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <StyledApp>
        <Wrapper>
          <VSpacing>
            <H1> VUTTR </H1>
          </VSpacing>

          <VSpacing>
            <H3> Very Useful Tools to Remember </H3>
          </VSpacing>

          <VSpacing>
            <SearchBar
              isSearchTags={isTagsLike}
              isSearchTagsHandler={() => setIsTagsLike(!isTagsLike)}
              value={query}
              placeholder='search'
              onChangeText={setQuery}
            />
            <Button
              kind='primary'
              prefix={<Icon kind='plus' color='White' />}
              onClick={setIsOpenAdd}
            >
              Add
            </Button>
          </VSpacing>

          <ListWrapper>
            {tools.map((tool, key) => (
              <VSmallSpacing key={key}>
                <Card
                  title={tool.title}
                  description={tool.description}
                  tags={tool.tags}
                  link={tool.link}
                  highlightTag={highlightTag}
                  onRemove={() => {
                    setIdDeleteTool(tool.id)
                    setIsOpenRemove(true)
                  }}
                />
              </VSmallSpacing>
            ))}
          </ListWrapper>
        </Wrapper>
        <AddToolDialogBox
          isOpen={isOpenAdd}
          onClose={() => setIsOpenAdd(false)}
          onConfirm={tool => setNewTool(tool)}
        />
        <RemoveToolDialogBox
          isOpen={isOpenRemove}
          onClose={() => setIsOpenRemove(false)}
          onConfirm={() => setIsDeleteTool(true)}
          onCancel={() => setIsOpenRemove(false)}
        />
      </StyledApp>
    </ThemeProvider>
  )
}

export default App
