import { Router } from "express"
import WordsController from '../controllers/WordsController'
import RoutesParams from '../middlewares/RoutesParams'

const routes = Router()
  .post('/words/:word', RoutesParams.validateWord, WordsController.validateWord)
  .post('/words', RoutesParams.getWords, WordsController.getWords)

export default routes