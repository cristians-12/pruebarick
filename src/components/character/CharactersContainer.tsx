'use client'
import React, { useEffect } from 'react';
import useFetch from '../../../hooks/fetch/useFetch';
import { container } from '../../../utils/motion';
import { motion } from 'framer-motion';
import CharacterCard from './CharacterCard';
import { Character } from '../../../types/api/characters';
import Paginator from '../Paginator';
import usePaginator from '../../../hooks/usePaginator';
import { ResponseCharacter } from '../../../types/api/response';

const CharactersContainer = () => {
    const { fetchData, dataFetch } = useFetch<ResponseCharacter>();
    const { handleNext, handlePrevious } = usePaginator(fetchData);

    useEffect(() => {
        fetchData(`${process.env.NEXT_PUBLIC_API_CHARACTERS_URL}`);
    }, []);

    return (
        <>
            {dataFetch && (
                <>
                    <motion.ul initial="hidden" animate="visible" className="flex gap-10 mt-3 justify-around flex-wrap" variants={container}>
                        {dataFetch.results.map((character: Character) => (
                            <CharacterCard character={character} key={character.id} />
                        ))}
                    </motion.ul>
                    <Paginator props={dataFetch.info} onPrevious={() => handlePrevious(dataFetch)} onNext={() => handleNext(dataFetch)} />
                </>
            )}
        </>
    );
};

export default CharactersContainer;
