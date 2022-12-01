import { api } from 'boot/axios'

export function getList (param) {
  return api.get(`/lists/${param}`)
}
