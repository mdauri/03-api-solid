import { app } from '@/app'
import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { FastifyInstance } from 'fastify'
import { create } from './create'
import { history } from './history'
import { metrics } from './metrics'
import { validate } from './validate'

export async function checkInsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)
}

app.get('/check-ins/history', history)
app.get('/check-ins/metrics', metrics)

app.post('/check-ins', create)
app.patch('/check-ins/:checkInId/validate', validate)