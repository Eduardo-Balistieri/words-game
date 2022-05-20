import { Request, Response } from "express"

class LettersController {

  private static vowelsPercentage = 0.3

  private static generateRandomLetters(amount: number): Array<string> {
    const consonants = "BCDFGHJKLMNPQRSTVWXYZ"
    const vowels = "AEIOU"

    const vowelsCount = Math.round(amount * this.vowelsPercentage)
    const letters = []

    for (let i = 0; i < amount; i++) {
      const letter = i < vowelsCount ?
        vowels.charAt(Math.floor(Math.random() * vowels.length)) :
        consonants.charAt(Math.floor(Math.random() * consonants.length))
      letters.push(letter)
    }
    return letters
  }

  static getLetters(req: Request, res: Response) {
    const amountParam = req.query.amount as string
    const amount = amountParam ? parseInt(amountParam) : 8

    const letters = LettersController.generateRandomLetters(amount)
    res.status(200).json({ letters })
  }
}

export default LettersController