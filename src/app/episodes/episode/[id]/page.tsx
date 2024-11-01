// pages/character/[id].tsx
import React from 'react';
import { Episode } from '../../../../../types/api/episodes';


const CharacterDetail = async ({ params }: { params: { id: string } }) => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_EPISODES_URL}/${params.id}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch character details');
    }

    const episode: Episode = await res.json();

    return (
        <div className='px-5'>
            <h1 className='text-[30px] font-bold'>{episode.name}</h1>
            <h2>Fecha de salida al aire: {episode.air_date}</h2>
            <p className='mt-3'>Personajes que salen en el episodio:</p>
            <div>

            </div>
        </div>
    );
};

export default CharacterDetail;
