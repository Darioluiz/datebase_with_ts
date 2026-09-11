import{ knex } from '../database'
import { z } from 'zod'
import { randomUUID } from 'node:crypto'
import { FastifyInstance } from 'fastify';

export async function transitionsRoutes(app: FastifyInstance) { 

  app.get('/', async() => {

    const transactions = await knex("transactions").select()
    return { transactions } 
  })
  
  app.get("/:id", async (request) => {
    const getTransactionParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = getTransactionParamsSchema.parse(request.params)
    
    const transaction = await knex("transactions").where("id", id).first()

    return { transaction }
  })

  app.get('/summary', async () => {
    const summary = await knex("transactions").sum("amount", {as: "amount"}).first()

    return { summary }
  })
  
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