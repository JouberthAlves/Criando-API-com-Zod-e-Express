import { randomUUID } from "crypto";
import { Request, Response, NextFunction } from "express";

export function myMiddleware(req: Request, res: Response, next: NextFunction) {
  req.user_id = randomUUID()

  console.log("Middleware executado!");
  next();
}