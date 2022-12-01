import { api } from 'boot/axios'

export function getAllTasksByListId (param) {
  return api.get(`/tasks/list/${param}`)
}

export function putTask (param) {
  return api.put(`/tasks/${param}`)
}
