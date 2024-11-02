import React from 'react'
import { motion } from 'framer-motion'
import { item } from '../../../utils/motion'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { Location } from '../../../types/api/locations'
import { addFavoriteLoc, removeFavoriteLoc } from '../../../redux/features/favLocationSlice'

const LocationCard: React.FC<{ location: Location }> = ({ location }) => {

    const favorites = useAppSelector(favorite => favorite.favoritesLocationReducer.value)
    const dispatch = useAppDispatch()

    const isFavorite = favorites.some(element => element.id === location.id);

    return (
        <div className='w-[40%] h-[100px]' >
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className=" cursor-pointer flex flex-col items-center justify-center gap-3"
                variants={item} key={location.id}>
                <Link href={`locations/location/${location.id}`} className='font-bold w-full'>{location.name}</Link>
                <div className='flex w-full justify-between items-center'>
                    <span className='font-bold'>{location.dimension}</span>
                    {isFavorite ? <FaHeart fill='red' onClick={() => dispatch(removeFavoriteLoc(location))} size={28} /> : <FaRegHeart onClick={() => { dispatch(addFavoriteLoc(location)) }} size={30} />}
                </div>
            </motion.div>
        </div>
    )
}

export default LocationCard