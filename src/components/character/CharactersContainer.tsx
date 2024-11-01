'use client'
import React, { useEffect } from 'react'
import useFetch from '../../../hooks/fetch/useFetch';
import { container } from '../../../utils/motion';
import { motion } from 'framer-motion'
import CharacterCard from './CharacterCard';
import { Character } from '../../../types/api/characters';

const CharactersContainer = () => {
    const { fetchData, dataFetch } = useFetch()
    useEffect(() => {
        fetchData(`${process.env.NEXT_PUBLIC_API_CHARACTERS_URL}`)
    }, []);
    return (
        <motion.ul initial="hidden"
            animate="visible" className="flex gap-10 justify-around flex-wrap" variants={container}>
            {
                dataFetch ? (
                    dataFetch.results.map((character: Character) => (
                        <CharacterCard character={character} key={character.id} />
                    ))
                ) : (
                    <motion.li>Loading...</motion.li>
                )
            }
        </motion.ul>
    )
}

export default CharactersContainer