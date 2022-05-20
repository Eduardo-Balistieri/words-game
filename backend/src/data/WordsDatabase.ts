import path from "path"
import fs from "fs"

class WordsDatabase {
  private wordsFilePath = path.join(__dirname, "./words.txt")
  private wordsFile = fs.readFileSync(this.wordsFilePath, "utf-8")

  private isWordValid(validLetters: Array<string>, attemtedWord: string): boolean {
    return attemtedWord.split("").every(letter => {
      const idx = validLetters.indexOf(letter)
      if (idx === -1) {
        return false
      }
      validLetters.splice(idx, 1)
      return true
    })
  }

  includes(word: string, letters: Array<string>): boolean {
    const isValid = this.isWordValid(letters, word)
    if (!isValid) {
      return false
    }
    for (let line of this.wordsFile.split(/\n/)) {
      if (line[0] > word[0]) {
        return false
      }
      if (line === word) {
        return true
      }
    }
    return false
  }

  getWords(letters: Array<string>): Array<string> {
    const words: Array<string> = []
    this.wordsFile.split(/\n/).forEach(line => {
      if (this.isWordValid([...letters], line)) {
        words.push(line)
      }
    })
    return words
  }
}

export default WordsDatabase