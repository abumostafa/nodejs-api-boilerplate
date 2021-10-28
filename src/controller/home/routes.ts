import { privateRoute } from "../../middleware/private-route.middleware"
import { getHome } from "./controller"
import { Router } from "express"

export const homeRouter = Router()

homeRouter.get("/", getHome)
homeRouter.get("/v1", getHome)
homeRouter.get("/private", privateRoute, getHome)
