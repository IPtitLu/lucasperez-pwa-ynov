import { api } from 'boot/axios'

export function getList (param) {
  return api.get(`/lists/${param}`)
}

export function getLists () {
  return api.get('/lists/')
}

export function postList (param) {
  return api.post('/lists', {
    title: param.title
  })
}
