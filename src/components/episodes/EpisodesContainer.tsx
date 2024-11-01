'use client'
import React, { useEffect } from 'react';
import useFetch from '../../../hooks/fetch/useFetch';
import { container } from '../../../utils/motion';
import { motion } from 'framer-motion';
import Paginator from '../Paginator';
import usePaginator from '../../../hooks/usePaginator';
import EpisodeCard from './EpisodeCard';
import { Episode } from '../../../types/api/episodes';
import { ResponseEpisode } from '../../../types/api/response';

const EpisodesContainer = () => {
    const { fetchData, dataFetch } = useFetch<ResponseEpisode>();
    const { handleNext, handlePrevious } = usePaginator(fetchData);

    useEffect(() => {
        fetchData(`${process.env.NEXT_PUBLIC_API_EPISODES_URL}`);
    }, []);

    return (
        <>
            {dataFetch && (
                <>
                    <motion.ul initial="hidden" animate="visible" className="flex gap-10 justify-around flex-wrap" variants={container}>
                        {dataFetch.results.map((episode: Episode) => (
                            <EpisodeCard episode={episode} key={episode.id} />
                        ))}
                    </motion.ul>
                    <Paginator props={dataFetch.info} onPrevious={() => handlePrevious(dataFetch)} onNext={() => handleNext(dataFetch)} />
                </>
            )}
        </>
    );
};

export default EpisodesContainer;
