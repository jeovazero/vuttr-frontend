// @flow
/** @jsx jsx */
import theme from './theme.js'
import styled from '@emotion/styled'
import { useState } from 'react'
import { css, jsx, Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import {
  H1,
  H3,
  SearchBar,
  Loader,
  Button,
  Card,
  Icon,
  P,
  AddToolDialogBox,
  RemoveToolDialogBox
} from './components/index.js'
import { useApiVuttr } from '../helpers/useApiVuttr'

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
  const {
    data,
    isLoading,
    isError,
    isTagsLike,
    toggleTagsLike,
    query,
    setQuery,
    highlightTag,
    postTool,
    deleteTool
  } = useApiVuttr()

  const [isOpenAddTool, setOpenAddTool] = useState(false)
  const [isOpenRemoveTool, setOpenRemoveTool] = useState(false)
  const [deleteToolID, setDeleteToolID] = useState(null)

  const removeTool = () => {
    if (deleteToolID) {
      deleteTool(deleteToolID, () => setOpenRemoveTool(false))
    }
  }

  const addTool = tool => {
    if (Object.keys(tool).length > 0) {
      const newTool = {
        ...tool,
        tags: tool.tags
          .trim()
          .replace(/\s{2,}/g, ' ')
          .split(' ')
      }
      postTool(newTool, () => setOpenAddTool(false))
    }
  }

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
              isSearchTagsHandler={toggleTagsLike}
              value={query}
              placeholder='search'
              onChangeText={setQuery}
            />
            <Button
              kind='primary'
              prefix={<Icon kind='plus' color='White' />}
              onClick={() => setOpenAddTool(true)}
            >
              Add
            </Button>
          </VSpacing>

          {isError ? <P> Error in fetch data </P> : null}
          {isLoading ? (
            <Loader />
          ) : (
            <ListWrapper>
              {data.length > 0 ? (
                data.map((tool, key) => (
                  <VSmallSpacing key={key}>
                    <Card
                      title={tool.title}
                      description={tool.description}
                      tags={tool.tags}
                      link={tool.link}
                      highlightTag={highlightTag}
                      onRemove={() => {
                        setDeleteToolID(tool.id)
                        setOpenRemoveTool(true)
                      }}
                    />
                  </VSmallSpacing>
                ))
              ) : (
                <P> Results not found</P>
              )}
            </ListWrapper>
          )}
        </Wrapper>
        <AddToolDialogBox
          isOpen={isOpenAddTool}
          onClose={() => setOpenAddTool(false)}
          onConfirm={tool => addTool(tool)}
        />
        <RemoveToolDialogBox
          isOpen={isOpenRemoveTool}
          onClose={() => setOpenRemoveTool(false)}
          onConfirm={() => removeTool()}
          onCancel={() => setOpenRemoveTool(false)}
        />
      </StyledApp>
    </ThemeProvider>
  )
}

export default App
