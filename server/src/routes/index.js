import Router from '@koa/router'
import taskRoutes from '#components/task/task-routes.js'
import listRoutes from '#components/list/list-routes.js'

const API_V1_ROUTER = new Router({ prefix: '/api' })

API_V1_ROUTER.use('/tasks', taskRoutes.routes(), taskRoutes.allowedMethods())
API_V1_ROUTER.use('/lists', listRoutes.routes(), listRoutes.allowedMethods())

export { API_V1_ROUTER }