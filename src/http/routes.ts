import { FastifyInstance } from 'fastify'
import { register } from './controllers/register'

export async function appRoputes(app: FastifyInstance) {
  app.post('/users', register)
}
