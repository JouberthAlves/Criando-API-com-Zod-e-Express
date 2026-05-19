import express, { Request, Response, NextFunction } from "express"

import { routes } from "./routes/index.js"
import { AppError } from "./utils/AppError.js"
import { ZodError } from "zod"

const PORT = 3333

const app = express()
app.use(express.json())

app.use(routes)

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ZodError) {
    return res.status(400).json({
      message: "Erro de Validação",
      issues: err.format(),
    })
  }

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    })
  }

  return res.status(500).json({
    message: "Internal server error",
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
