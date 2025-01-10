import './App.css'
import React from 'react'
import { useEffect, useState } from 'react'
import { getRandomFact } from './service/fact'
import { useCatImage } from './hooks/useCatImage'
import { CAT_PREFIX_URL } from './constant'


export function App() {
    const [fact, setFact] = useState()
    const { imageURL } = useCatImage({ fact })

    useEffect(() => {
        getRandomFact().then(setFact)
    }, [])


    const handleClick = async () => {
        const newFact = await getRandomFact()
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