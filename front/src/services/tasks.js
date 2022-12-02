import { api } from 'boot/axios'

export function getAllTasksUncompletedByListId (param) {
  return api.get(`/tasks/list-uncompleted/${param}`)
}

export function getAllTasksCompletedByListId (param) {
  return api.get(`/tasks/list-completed/${param}`)
}

export function getAllTasksByListId (param) {
  return api.get(`/tasks/list/${param}`)
}

export function putTask (param) {
  return api.put(`/tasks/${param}`)
}

export function deleteTask (param) {
  return api.delete(`/tasks/${param}`) && window.location.reload()
}

export function postTask (params) {
  return api.post('/tasks/', {
    title: params.title,
    list: params.list
  })
}
export async function updateTask (task, id) {
  return await api.put(`/tasks/${id}`, {
    title: task.title,
    list: task.list,
    done: !task.done
  }) && window.location.reload()
}
