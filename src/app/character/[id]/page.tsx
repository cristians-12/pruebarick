// pages/character/[id].tsx
import React from 'react';
import { Character } from '../../../../types/api/characters';
import Image from 'next/image';

const CharacterDetail = async ({ params }: { params: { id: string } }) => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_CHARACTERS_URL}/${params.id}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch character details');
    }

    const character: Character = await res.json();

    return (
        <div>
            <h1>{character.name}</h1>
            <Image width={300} height={300} src={character.image} alt={character.name} />
            <p>Species: {character.species}</p>
            <p>Status: {character.status}</p>

        </div>
    );
};

export default CharacterDetail;
