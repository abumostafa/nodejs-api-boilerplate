import { NextFunction, Request, Response, Router } from "express"
import { HttpError } from "../error/http.error"
import { homeRouter } from "../controller/home/routes"

export const router = Router()

router.use("/", homeRouter)
router.use("*", (req: Request, res: Response, next: NextFunction) => next(new HttpError(404, "Not found")))
