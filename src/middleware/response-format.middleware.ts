import { NextFunction, Request, Response } from "express"

export const apiResponseFormat = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json = function (data?: any): Response {
      const json = res.json

      json.call(res, data && !data.error ? { data } : data)

      return res
    }
    next()
  } catch (err) {
    next(err)
  }
}
