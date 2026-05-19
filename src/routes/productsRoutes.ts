import { Router } from "express";

import { myMiddleware } from '../middlewares/myMiddleware.js'
import { ProductsController } from '../controllers/products/ProductsController.js'

const productsController = new ProductsController()

const productsRoutes = Router()

productsRoutes.get('/:id', (req, res) => {
  productsController.index(req, res)
})

productsRoutes.post('', myMiddleware, (req, res) => {
  productsController.create(req, res)
})

export { productsRoutes }