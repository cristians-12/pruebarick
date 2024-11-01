'use client'

import { useState } from "react"
import { ResponseCharacter } from "../../types/api/characters";

const useFetch = () => {

    const [dataFetch, setDataFetch] = useState<ResponseCharacter | null>(null);

    const fetchData = async (url: string) => {
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
            fetchData,
            dataFetch
        }
    )
}

export default useFetch