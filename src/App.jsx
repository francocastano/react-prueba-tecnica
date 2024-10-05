import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact"
const CAT_ENDPOINT_IMAGE_URL = "https://catass.com/says/${}"


export function App() {

  const [fact, setFact] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, sapiente?')

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => setFact(data.fact))
  }, [])

  return (
    <main>
      <h1>app de gatios</h1>
      {fact && <p>{fact}</p>}
    </main>
  )

  // Fact random: https://catfact.ninja/fact
  // image randon: https://catass.com/says/hello
  
}