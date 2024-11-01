'use client'

import { useState } from "react"
import { Character } from "../../types/api/characters";

const useFetch = () => {

    const [dataFetch, setDataFetch] = useState<Character[] | null>(null);

    const getAllCharacters = async (url: string) => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setDataFetch(data);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        {
            getAllCharacters,
            dataFetch
        }
    )
}

export default useFetch