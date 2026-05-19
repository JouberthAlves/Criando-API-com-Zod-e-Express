import { Request, Response } from "express"
import { z } from "zod"

class ProductsController {
  index(req: Request, res: Response) {
    const { id } = req.params

    const { name, quantity } = req.query

    res.send(
      `O produto de id ${id} e nome ${name}, possui ${quantity} no estoque`,
    )
  }

  create(req: Request, res: Response) {
    const bodyScheme = z.object({
      name: z
        .string().trim()
        .min(4, { message: "O nome precisa ter pelo menos 4 caracteres." })
        .max(30, { message: "O nome precisa ter no máximo 30 caracteres." }),
        
      price: z
        .number()
        .positive({ message: "O preço precisa ser um número positivo." }),
    })

    const { name, price } = bodyScheme.parse(req.body)

    res.status(201).json({ name, price, userId: req.user_id })
  }
}

export { ProductsController }
