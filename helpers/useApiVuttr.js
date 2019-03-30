import { api } from './apiclient.js'
import { debounce } from 'throttle-debounce'
import { useEffect, useState } from 'react'

const apiClient = api('http://localhost:3000')

const debouncedGet = debounce(
  500,
  async ({ query, isTagsLike, setData, setIsLoading, setIsError }) => {
    try {
      setIsLoading(true)
      const params = isTagsLike
        ? { tags_like: query }
        : query.length > 0
          ? { q: query }
          : {}

      const resp = await apiClient.get({ params })
      setData(resp)
      setIsLoading(false)
      setIsError(null)
    } catch (error) {
      setIsError(true)
      setIsLoading(false)
    }
  }
)

export const useApiVuttr = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(null)

  const [isTagsLike, setIsTagsLike] = useState(false)
  const [query, setQuery] = useState('')
  const highlightTag = isTagsLike ? query : ''
  const toggleTagsLike = () => setIsTagsLike(!isTagsLike)
  const [method, setMethod] = useState('GET')
  const [tool, setTool] = useState('')
  const [idDelete, setIdDelete] = useState(null)

  const vuttr = async ({ method, query, isTagsLike, tool, id }) => {
    try {
      if (method === 'GET') {
        await debouncedGet({
          query,
          isTagsLike,
          setData,
          setIsLoading,
          setIsError
        })
      } else if (method === 'POST') {
        setIsLoading(true)
        await apiClient.post({ data: tool })
        setMethod('GET')
        setIsLoading(false)
        setIsError(null)
      } else if (method === 'DELETE') {
        setIsLoading(true)
        await apiClient.delete({ id })
        setMethod('GET')
        setIsLoading(false)
        setIsError(null)
      } else {
        throw new Error('Method not specified!')
      }
    } catch (e) {
      setData([])
      setIsLoading(false)
      setIsError(e.message)
    }
  }

  useEffect(() => {
    vuttr({ method, query, isTagsLike, id: idDelete, tool })
  }, [method, query, isTagsLike, idDelete, tool])
  const postTool = (newTool, callback) => {
    setTool(newTool)
    setMethod('POST')
    callback && callback()
  }
  const deleteTool = (id, callback) => {
    setIdDelete(id)
    setMethod('DELETE')
    callback && callback()
  }

  return {
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
  }
}
