import { Dialect } from "sequelize"

export const config = {
  port: process.env.APP_PORT || 4455,
  debug: process.env.APP_DEBUG === "1",
  database: {
    user: process.env.DATABAE_USER || "root",
    pass: process.env.DATABAE_PASS || "root",
    name: process.env.DATABAE_NAME || "api",
    host: process.env.DATABAE_HOST || "127.0.0.1",
    port: Number(process.env.DATABAE_PORT || 3306),
    dialect: (process.env.DATABASE_DIALECT || "mysql") as Dialect
  },

  sentry: {
    dsn: process.env.SENTRY_DSN || "",
    enabled: Boolean(process.env.SENTRY_ENABLED === "1" || true),
    environment: process.env.SENTRY_ENV || process.env.NODE_ENV || "development"
  }
}
