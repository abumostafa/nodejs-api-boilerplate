import { NextFunction, Request, Response } from "express"
import passport from "passport"
import { HttpError } from "../error/http.error"

export const privateRoute = (req: Request, res: Response, next: NextFunction) => {
  return passport.authenticate("bearer", (err, user) => {
    if (err) return next(err)

    if (!user) return next(new HttpError(401, "Unauthorized"))

    req.logIn(user, next)
  })(req, res, next)
}
