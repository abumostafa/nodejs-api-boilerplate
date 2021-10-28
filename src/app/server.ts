import dotenv from "dotenv"

dotenv.config()

import express from "express"
import bodyParser from "body-parser"
import { router } from "./router"
import { apiErrorHandler } from "../middleware/error-handler.middleware"
import { apiResponseFormat } from "../middleware/response-format.middleware"
import { auth } from "./passport"
import * as Sentry from "@sentry/node"

const app = express()

app.use(Sentry.Handlers.requestHandler())
app.use(auth.initialize())
app.use(bodyParser.json())
app.use(router)
app.use(apiResponseFormat)
app.use(Sentry.Handlers.errorHandler())
app.use(apiErrorHandler)

export const server = app
