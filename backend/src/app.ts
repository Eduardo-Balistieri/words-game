import express from "express"
import compression from "compression" //gzip compression
import routes from "./routes/index"
import cors from "cors"

const app = express()
app.use(express.json(), compression(), cors())
routes(app)

export default app