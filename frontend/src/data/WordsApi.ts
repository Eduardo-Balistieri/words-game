import axios from '../conf/axios'

class WordsApi {

  getLetters(callBack: (res: Array<string>) => void) {
    axios.get('/letters')
      .then(response => {
        callBack(response.data.letters)
      })
      .catch(error => {
        console.log(error.message)
        throw error.message
      })
  }

  validateWord(word: string, letters: Array<string>, callBack: (isValid: boolean) => void) {
    axios.post(`/words/${word}`, { letters })
      .then(response => {
        callBack(response.data.valid)
      })
      .catch(error => {
        console.log(error.message)
        throw error.message
      })
  }

  getWords(letters: Array<string>, callBack: (words: Array<string>) => void) {
    axios.post(`/words/`, { letters })
      .then(response => {
        callBack(response.data.words)
      })
      .catch(error => {
        console.log(error.message)
        throw error.message
      })
  }
}

export default WordsApi