import React from 'react';
import { Character } from '../../../../types/api/characters';
import Image from 'next/image';
import { FaCircle } from 'react-icons/fa';
import { div } from 'framer-motion/client';



const CharacterDetail = async ({ params }: { params: { id: string } }) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_CHARACTERS_URL}/${params.id}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch character details');
    }

    const character: Character = await res.json();

    return (
        <div className='px-5 flex gap-10'>
            <div className='w-[30%]'>
                <figure className='w-[100%]'>
                    <Image className='w-full' src={character.image} width={500} height={500} alt={character.name} />
                </figure>
                <h1 className='text-[30px] my-5 font-bold'>{character.name}</h1>
                <div className='flex items-center gap-2'>
                    <h2>Estado:</h2>
                    {character.status == 'Dead' ?
                        (
                            <>
                                Muerto
                                <FaCircle fill='red' size={10} />
                            </>
                        )
                        :
                        character.status == 'Alive' ?
                            (
                                <>
                                    Vivo
                                    <FaCircle fill='lightgreen' size={10} />
                                </>
                            )
                            :
                            <>Desconocido</>}
                </div>
                <h3>Especie: {character.species}</h3>
                <p>
                    Origen: {character.origin.name}
                </p>
                <p>Genero: {character.gender}</p>
            </div>
            <div className='w-[40%]'>
                <p className='text-[30px]'>Ubicado en: {character.location.name}</p>
                <p className='text-[30px]'>Viene de: {character.origin.name}</p>
            </div>
        </div>
    );
};

export default CharacterDetail;
