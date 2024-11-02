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
import { API_CHARACTERS_URL } from '../../../constants';
import { useAppSelector } from '../../../redux/hooks';

const CharactersContainer = () => {
    const { fetchData, dataFetch } = useFetch<ResponseCharacter>();
    const { handleNext, handlePrevious } = usePaginator(fetchData);

    const page = useAppSelector(
        (page)=>page.pageReducer.value
    )

    useEffect(() => {
        fetchData(`${API_CHARACTERS_URL}/?page=${page}`);
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
