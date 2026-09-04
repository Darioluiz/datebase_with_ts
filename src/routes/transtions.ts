import{ knex } from '../database'
import { z } from 'zod'
import { randomUUID } from 'node:crypto'
import { FastifyInstance } from 'fastify';

export async function transitionsRoutes(app: FastifyInstance) { 

  app.post('/', async (req, reply) => {
    
    const creatTransaction = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(["credit", "debit"])
    })

    const { title, amount , type} = creatTransaction.parse(req.body)

    await knex('transactions').insert({
      id: randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
      session_id: 2
    })

  return reply.status(201).send()


})
}