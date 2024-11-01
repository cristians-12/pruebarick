'use client'
import React, { useEffect } from 'react';
import useFetch from '../../../hooks/fetch/useFetch';
import { container } from '../../../utils/motion';
import { motion } from 'framer-motion';
import CharacterCard from './CharacterCard';
import { Character } from '../../../types/api/characters';
import Paginator from '../Paginator';

const CharactersContainer = () => {
    const { fetchData, dataFetch } = useFetch();

    useEffect(() => {
        fetchData(`${process.env.NEXT_PUBLIC_API_CHARACTERS_URL}`);
    }, []);

    const handlePrevious = () => {
        if (dataFetch?.info.prev) {
            fetchData(dataFetch.info.prev);
        }
    };

    const handleNext = () => {
        if (dataFetch?.info.next) {
            fetchData(dataFetch.info.next);
        }
    };

    return (
        <>
            {dataFetch && (
                <>
                    <motion.ul initial="hidden" animate="visible" className="flex gap-10 justify-around flex-wrap" variants={container}>
                        {dataFetch.results.map((character: Character) => (
                            <CharacterCard character={character} key={character.id} />
                        ))}
                    </motion.ul>
                    <Paginator props={dataFetch.info} onPrevious={handlePrevious} onNext={handleNext} />
                </>
            )}
        </>
    );
};

export default CharactersContainer;
