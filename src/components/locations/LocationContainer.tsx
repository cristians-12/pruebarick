'use client'
import React, { useEffect } from 'react';
import useFetch from '../../../hooks/fetch/useFetch';
import { container } from '../../../utils/motion';
import { motion } from 'framer-motion';
import Paginator from '../Paginator';
import usePaginator from '../../../hooks/usePaginator';
import { ResponseEpisode } from '../../../types/api/response';
import { Location } from '../../../types/api/locations';
import LocationCard from './LocationCard';

const LocationContainer = () => {
    const { fetchData, dataFetch } = useFetch<ResponseEpisode>();
    const { handleNext, handlePrevious } = usePaginator(fetchData);

    useEffect(() => {
        fetchData(`${process.env.NEXT_PUBLIC_API_LOCATIONS_URL}`);
    }, []);

    return (
        <>
            {dataFetch && (
                <>
                    <motion.ul initial="hidden" animate="visible" className="flex gap-10 justify-around flex-wrap" variants={container}>
                        {dataFetch.results.map((location: Location) => (
                            <LocationCard location={location} key={location.id} />
                        ))}
                    </motion.ul>
                    <Paginator props={dataFetch.info} onPrevious={() => handlePrevious(dataFetch)} onNext={() => handleNext(dataFetch)} />
                </>
            )}
        </>
    );
};

export default LocationContainer;
