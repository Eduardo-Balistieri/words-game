import { Request, Response } from "express"
import wordsDatabase from '../data/WordsDatabase'

const WordsDatabase = new wordsDatabase()

class WordsController {
  static validateWord(req: Request, res: Response) {
    const word: string = req.params.word.toLowerCase()
    const letters: Array<string> = req.body.letters.map((letter: string) => letter.toLowerCase())

    if (WordsDatabase.includes(word, letters)) {
      res.status(200).json({ valid: true })
    }
    else {
      res.status(200).json({ valid: false })
    }
  }

  static getWords(req: Request, res: Response) {
    const letters: Array<string> = req.body.letters.map((letter: string) => letter.toLowerCase())
    const words = WordsDatabase.getWords(letters)
    res.status(200).json({ words: words })
  }
}

export default WordsController