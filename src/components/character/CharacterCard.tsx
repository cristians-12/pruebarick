import React from 'react'
import { Character } from '../../../types/api/characters'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { item } from '../../../utils/motion'
import Link from 'next/link'
import { useAppSelector } from '../../../redux/hooks'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

const CharacterCard: React.FC<{ character: Character }> = ({ character }) => {

    const favorites = useAppSelector(favorite => favorite.favoritesReducer.value)

    const isFavorite = favorites.some(element => element.id === character.id);

    return (
        <Link className='w-[20%]' href={`/character/${character.id}`}>
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className=" cursor-pointer flex flex-col items-center justify-center gap-3"
                variants={item} key={character.id}>
                <Image src={character.image} width={300} className="w-full" height={100} alt={character.name} />
                <span className='font-bold w-full'>{character.name}</span>

                <span className='font-bold w-full'>{character.species}</span>
                <div className='flex w-full justify-between items-center'>
                    <span className='  font-bold'>{character.location.name}</span>
                    {isFavorite ? <FaHeart fill='red' size={28} /> : <FaRegHeart size={30} />}
                </div>
            </motion.div>
        </Link>
    )
}

export default CharacterCard