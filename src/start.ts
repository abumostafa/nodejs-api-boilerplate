import { server } from "./app/server"
import { config } from "./config/api"

server.listen(config.port, () => process.stdout.write(`Api started on port ${config.port}`))
