import { Router } from "express"
import LettersController from "../controllers/LettersController"

const routes = Router()
  .get('/letters', LettersController.getLetters)

export default routes