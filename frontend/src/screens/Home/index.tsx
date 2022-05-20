import { FormEvent, useEffect, useState } from "react";
import WordsApi from "../../data/WordsApi";
import Button from '../../components/Button'

import * as loading from '../../lottie/loading.json'
import Lottie from 'react-lottie'
import './styles.css'


const api = new WordsApi()

const Home = () => {
  const [letters, setLetters] = useState<Array<string>>([])
  const [words, setWords] = useState<Array<string>>([])
  
  const [wordInput, setWordInput] = useState('')

  const validateWord = (event: FormEvent) => {
    event.preventDefault()
    if (words.includes(wordInput)) {
      setWordInput('')
      return
    }
    api.validateWord(wordInput, letters, (isValid) => {
      if (isValid) {
        setWordInput('')
        setWords([wordInput, ...words])
      }
    })
  }

  const fetchWords = () => {
    api.getWords(letters, (words) => {
      console.log(words)
    })
  }

  useEffect(() => {
    api.getLetters((data: Array<string>) => {
      setLetters(data)
    })
  }, [])


  return (
    <div className="home">
      <p onClick={fetchWords} className="show-words">Mostrar palavras</p>
      {letters.length === 0 && <div className="loading">
        <Lottie options={{
          loop: true,
          autoplay: true,
          animationData: loading
        }} />
      </div>}

      <ul className="letters">
        {letters.map((letter, index) => (
          <li key={`${letter}-${index}`}>
            <p>{letter}</p>
          </li>
        ))}
      </ul>

      <form onSubmit={validateWord}>
        <input
          type="text"
          placeholder="Comece a digitar"
          value={wordInput}
          onChange={e => setWordInput(e.target.value)}
        />
        <Button>Enviar</Button>
      </form>
      <hr />
      <ul className="words-list">
        {words.map((word, index) => (
          <li key={`${word}-${index}`}>
            <p>{word}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
