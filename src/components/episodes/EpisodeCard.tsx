import React from 'react'
import { motion } from 'framer-motion'
import { item } from '../../../utils/motion'
import Link from 'next/link'
import { useAppSelector } from '../../../redux/hooks'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { Episode } from '../../../types/api/episodes'

const EpisodeCard: React.FC<{ episode: Episode }> = ({ episode }) => {

    const favorites = useAppSelector(favorite => favorite.favoritesReducer.value)

    const isFavorite = favorites.some(element => element.id === episode.id);

    return (
        <Link className='w-[20%]' href={`/episode/${episode.id}`}>
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className=" cursor-pointer flex flex-col items-center justify-center gap-3"
                variants={item} key={episode.id}>
                <span className='font-bold w-full'>{episode.name}</span>
                <div className='flex w-full justify-between items-center'>
                    <span className='font-bold'>{episode.episode}</span>
                    {isFavorite ? <FaHeart fill='red' size={28} /> : <FaRegHeart size={30} />}
                </div>
            </motion.div>
        </Link>
    )
}

export default EpisodeCard