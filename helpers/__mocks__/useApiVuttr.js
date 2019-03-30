const vuttr = jest.genMockFromModule('../useApiVuttr.js')

const __initialStateMock = {
  data: [],
  isLoading: false,
  isError: false,
  isTagsLike: false,
  toggleTagsLike: () => {},
  query: '',
  setQuery: () => {},
  highlightTag: '',
  postTool: () => {},
  deleteTool: () => {}
}

const __stateMock = { ...__initialStateMock }

const __setStateMock = newState => {
  const keys = Object.keys(newState)
  keys.reduce((acc, cur) => (__stateMock[cur] = newState[cur]), '')
}

vuttr.useApiVuttr = () => __stateMock
vuttr.__setStateMock = __setStateMock
vuttr.__reset = () => __setStateMock(__initialStateMock)

module.exports = vuttr
