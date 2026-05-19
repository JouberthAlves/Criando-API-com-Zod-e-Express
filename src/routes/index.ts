import { productsRoutes } from "./productsRoutes.js";
import { Router } from "express";

const routes = Router()

routes.use("/products", productsRoutes)

export {routes}