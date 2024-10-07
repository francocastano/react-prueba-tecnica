import './App.css'
import React from 'react'
import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact"
const CAT_PREFIX_URL = "https://cataas.com"

export function App() {
  const [fact, setFact] = useState()
  const [imageURL, setImageURL] = useState()

  useEffect(() => {
    async function getRandomFact() {
      const response = await fetch(CAT_ENDPOINT_RANDOM_FACT)
      const { fact } = await response.json()
      setFact(fact)
    }
    getRandomFact()
  }, [])

  useEffect(() => {
    if (!fact) return

    const threeWord = fact.split(' ').slice(0, 3).join(' ')

    async function getCatImageURL() {
      const response = await fetch(`${CAT_PREFIX_URL}/cat/says/${threeWord}?size=50&fontColor=red&json=true`)
      const { _id } = await response.json()
      const catURL = `/cat/${_id}/says/${threeWord}?font=Impact&fontSize=30&fontColor=%23FFF&fontBackground=none&position=center`
      setImageURL(catURL)
    }
    getCatImageURL()
  }, [fact])

  return (
    <main>
      <h1>App de gatios</h1>
      {fact && <p>{fact}</p>}
      {imageURL && <img src={`${CAT_PREFIX_URL}${imageURL}`} alt={`imgae extracted using the first three words for ${fact}`} />}
    </main>
  )

}