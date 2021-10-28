import * as Sentry from "@sentry/node"
import { config } from "../config/api"

Sentry.init({
  dsn: config.sentry.dsn,
  integrations: [new Sentry.Integrations.Http({ tracing: true })],
  tracesSampleRate: 1.0,
  enabled: config.sentry.enabled,
  environment: config.sentry.environment
})
