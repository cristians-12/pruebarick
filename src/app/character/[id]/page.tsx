// app/character/[id]/page.tsx
import React from 'react';
import { Character } from '../../../../types/api/characters';
import Image from 'next/image';
import { FaCircle } from 'react-icons/fa';

interface CharacterDetailProps {
    params: { id: string };
}

const CharacterDetail = async ({ params }: CharacterDetailProps) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_CHARACTERS_URL}/${params.id}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch character details');
    }

    const character: Character = await res.json();

    return (
        <div className='px-5 flex'>
            <div className='w-[50%]'>
                <figure className='w-[50%]'>
                    <Image className='w-full' src={character.image} width={500} height={500} alt={character.name} />
                </figure>
                <h1 className='text-[30px] font-bold'>{character.name}</h1>
                <div className='flex items-center gap-3'>
                    <h2>Estado: {character.status}</h2>
                    {character.status == 'Dead' ? <FaCircle fill='red' /> : <FaCircle fill='green' />}
                </div>
                <h3>Especie: {character.species}</h3>
                <p>
                    Origen: {character.origin.name}
                </p>
                <p>Genero: {character.gender}</p>
            </div>
            <div>
                <p className='text-[30px]'>Ubicado en: {character.location.name}</p>
                <p className='text-[30px]'>Viene de: {character.origin.name}</p>
            </div>
        </div>
    );
};

export default CharacterDetail;
