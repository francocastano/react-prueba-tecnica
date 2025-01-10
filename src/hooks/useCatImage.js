import { useState, useEffect } from 'react'
import { CAT_PREFIX_URL } from '../constant'

export function useCatImage({ fact }) {
    const [imageURL, setImageURL] = useState("")

    useEffect(() => {
        if (!fact) return

        const threeWord = fact.split(' ').slice(0, 3).join(' ')

        async function getCatImageURL() {
            const response = await fetch(`${CAT_PREFIX_URL}/cat/says/${threeWord}?json=true`)
            const { _id } = await response.json()
            const catURL = `/cat/${_id}/says/${threeWord}?font=Impact&fontSize=30&fontColor=%23FFF&fontBackground=none&position=center`
            setImageURL(catURL)
        }
        getCatImageURL()
    }, [fact])
    return { imageURL }
}
