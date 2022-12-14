import Router from '@koa/router'
import * as TaskControllers from '#components/task/task-controllers.js'

const tasks = new Router()

tasks.get('/', TaskControllers.index)
tasks.get('/list/:id', TaskControllers.getAllByListId)
tasks.get('/list-uncompleted/:id', TaskControllers.getAllUncompletedByListId)
tasks.get('/list-completed/:id', TaskControllers.getAllCompletedByListId)
tasks.get('/:id', TaskControllers.id)
tasks.post('/', TaskControllers.create)
tasks.put('/:id', TaskControllers.update)
tasks.del('/:id', TaskControllers.del)

export default tasks