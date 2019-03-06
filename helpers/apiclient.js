const fetch = require('node-fetch')
const qs = require('querystring')

const url = (baseUrl, path) => `${baseUrl}${path}`

const _get = (baseUrl, path, params) => {
  const query = Object.keys(params).length > 0 ? '?' + qs.stringify(params) : ''
  const target = url(baseUrl, path) + query

  return fetch(target)
    .then(res => res.json())
    .then(json => json)
}

const _post = (baseUrl, path, data) => {
  const target = url(baseUrl, path)

  return fetch(target, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(json => json)
}

const _delete = (baseUrl, path, id) => {
  const target = url(baseUrl, path) + id

  return fetch(target, {
    method: 'DELETE'
  }).then(res => res.ok)
}

export const api = baseUrl => {
  return {
    get: ({ params }) => _get(baseUrl, '/tools', params),
    post: ({ data }) => _post(baseUrl, '/tools', data),
    delete: ({ id }) => _delete(baseUrl, '/tools/', id)
  }
}
