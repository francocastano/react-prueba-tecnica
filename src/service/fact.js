import { CAT_ENDPOINT_RANDOM_FACT } from "../constant"

export const getRandomFact = async () => {
    const response = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const { fact } = await response.json()
    return fact
}