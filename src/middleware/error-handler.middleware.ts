import { NextFunction, Request, Response } from "express"
import { HttpError } from "../error/http.error"
import { config } from "../config/api"

export const apiErrorHandler = (err: Error | HttpError, req: Request, res: Response, next: NextFunction) => {
  try {
    const code = "status" in err && err.status >= 400 ? err.status : 500
    let message = err.message

    if (!config.debug && code >= 500) {
      message = "Ops, Something went wrong."
    }

    res.status(code).json({ error: { message } })
  } catch (err) {
    next(err)
  }
}
