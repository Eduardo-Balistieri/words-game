import { Express } from "express"
import lettersRoutes from './LettersRoutes'
import wordsRoutes from './WordsRoutes'

const routes = (app: Express) => {
  app.use(lettersRoutes, wordsRoutes)
}

export default routes
