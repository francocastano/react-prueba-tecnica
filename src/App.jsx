import './App.css'
import React from 'react'
import { useEffect, useState } from 'react'
import { getRandomFact } from './service/fact'

const CAT_PREFIX_URL = "https://cataas.com"

export function App() {
  const [fact, setFact] = useState()
  const [imageURL, setImageURL] = useState()



  useEffect(() => {
    getRandomFact().then(setFact)
  }, [])

  useEffect(() => {
    if (!fact) return

    const threeWord = fact.split(' ').slice(0, 3).join(' ')

    async function getCatImageURL() {
      const response = await fetch(`${CAT_PREFIX_URL}/cat/says/${threeWord}?size=50&fontColor=red&json=true`)
      const { _id } = await response.json()
      const catURL = `/cat/${_id}/says/${threeWord}?font=Impact&fontSize=30&fontColor=%23FFF&fontBackground=none&position=center`
      setImageURL(catURL)
      console.log(catURL)
    }
    getCatImageURL()
  }, [fact])

  const handleClick = async () => {
   const newFact =  await getRandomFact()
   setFact(newFact)
  }

  return (
    <main>
      <h1>App de gatios</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageURL && <img src={`${CAT_PREFIX_URL}${imageURL}`} alt={`image extracted using the first three words for ${fact}`} />}
    </main>
  )

}