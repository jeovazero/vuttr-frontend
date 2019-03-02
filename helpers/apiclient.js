const fetch = require('node-fetch')
const qs = require('querystring')

const API_URL = 'http://localhost:3000/tools'

const endpoint = path => `${API_URL}${path}`

const getTools = ({ query, isTagsLike = false }) => {
  const param = isTagsLike
    ? tagsLike => ({ tags_like: tagsLike })
    : q => ({ q })

  const path =
    query && query.length > 0 ? '?' + qs.stringify(param(query)) : '/'

  return fetch(endpoint(path))
    .then(res => res.json())
    .then(json => json)
}

const addTool = ({ tool }) =>
  fetch(endpoint('/'), {
    method: 'POST',
    body: JSON.stringify(tool),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(json => json)

const deleteTool = ({ id }) =>
  fetch(endpoint('/' + id), {
    method: 'DELETE'
  }).then(res => res.ok)

module.exports = {
  getTools,
  addTool,
  deleteTool
}
