import { config } from "./api"

export = {
  username: config.database.user,
  password: config.database.pass,
  database: config.database.name,
  host: config.database.host,
  port: config.database.port,
  dialect: config.database.dialect
}
