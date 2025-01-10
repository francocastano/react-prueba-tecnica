import './App.css'
import React from 'react'
import { useEffect, useState } from 'react'
import { getRandomFact } from './service/fact'
import { useCatImage } from './hooks/useCatImage'
import { CAT_PREFIX_URL } from './constant'
import { useCatFact } from './hooks/useCatFact'



export function App() {
    const {fact, refreshFact} = useCatFact()
    const { imageURL } = useCatImage({ fact })

    const handleClick = async () => {
        refreshFact()
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