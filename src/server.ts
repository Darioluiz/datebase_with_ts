import fastify from 'fastify';

import { env} from '../env';

import { transitionsRoutes } from './routes/transtions.ts';

const app = fastify()

app.register(transitionsRoutes, {
  prefix: 'transactions'
})

app.listen({port: env.PORT}).then(() => {
  console.log('Server is running on http://localhost:' + env.PORT)
}); 