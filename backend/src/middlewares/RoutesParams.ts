import { Request, Response } from "express"

class RoutesParams {
  static validateWord(req: Request, res: Response, next: () => void) {
    if (!req.params.word || !req.body.letters) {
      return res.status(400).json({ message: "Missing data" })
    }
    next()
  }

  static getWords(req: Request, res: Response, next: () => void) {
    if (!req.body.letters) {
      return res.status(400).json({ message: "Missing data" })
    }
    next()
  }
}

export default RoutesParams