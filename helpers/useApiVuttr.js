import { useEffect, useState } from 'react'
import { api } from './apiclient.js'

const apiClient = api('http://localhost:3000')

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
    setIsLoading(true)
    try {
      if (method === 'GET') {
        const params = isTagsLike
          ? { tags_like: query }
          : query.length > 0
            ? { q: query }
            : {}

        const resp = await apiClient.get({ params })
        setData(resp)
      } else if (method === 'POST') {
        await apiClient.post({ data: tool })
        setMethod('GET')
      } else if (method === 'DELETE') {
        await apiClient.delete({ id })
        setMethod('GET')
      } else {
        throw new Error('Method not specified!')
      }
      setIsLoading(false)
      setIsError(null)
    } catch (e) {
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
