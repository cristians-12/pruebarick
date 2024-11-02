
'use client'
import React, { useEffect, useState } from "react";
import { Character } from "../../../../types/api/characters";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";
import { Episode } from "../../../../types/api/episodes";
import EpisodeCard from "@/components/episodes/EpisodeCard";

const CharacterDetail: React.FC<{ id: string }> = ({ id }) => {
    const [character, setCharacter] = useState<Character | null>(null);
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_CHARACTERS_URL}/${id}`, {
                    cache: "no-store",
                });

                if (!res.ok) {
                    throw new Error('Error fetching character');
                }

                const data: Character = await res.json();
                setCharacter(data);

                // Fetch episodes
                const episodePromises = data.episode.map((url) => fetch(url).then((res) => res.json()));
                const episodesData = await Promise.all(episodePromises);
                setEpisodes(episodesData);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacter();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>; // Muestra un estado de carga
    }

    if (!character) {
        return <div>No character found.</div>; // Maneja el caso en que no se encuentra el personaje
    }

    return (
        <div className="">
            <div className="px-5 flex gap-10">
                <div className="w-[30%]">
                    <figure className="w-[100%]">
                        <Image
                            className="w-full"
                            src={character.image}
                            width={500}
                            height={500}
                            alt={character.name}
                        />
                    </figure>
                    <h1 className="text-[30px] my-5 font-bold">{character.name}</h1>
                    <div className="flex items-center gap-2">
                        <h2 className="font-bold">Estado:</h2>
                        {character.status === "Dead" ? (
                            <>
                                Muerto
                                <FaCircle fill="red" size={10} />
                            </>
                        ) : character.status === "Alive" ? (
                            <>
                                Vivo
                                <FaCircle fill="lightgreen" size={10} />
                            </>
                        ) : (
                            <>Desconocido</>
                        )}
                    </div>
                    <h3>
                        <span className="font-bold">Especie:</span> {character.species}
                    </h3>
                    <Link
                        className="cursor-pointer"
                        href={`/locations/location/${character.id}`}
                    >
                        Origen: {character.origin.name}
                    </Link>
                    <p>
                        <span className="font-bold">Género:</span> {character.gender}
                    </p>
                </div>
                <div className="w-[70%]">
                    <p className="text-[30px]">Ubicado en: {character.location.name}</p>
                    <p className="text-[30px]">Viene de: {character.origin.name}</p>
                    <p>Episodios en los que aparece el personaje:</p>
                    <div className="flex flex-wrap gap-[20%] w-full lg:h-[70vh] p-20 overflow-x-hidden lg:overflow-y-scroll">
                        {episodes.map((episode: Episode) => (
                            <EpisodeCard episode={episode} key={episode.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Asegúrate de pasar el `id` al componente desde la página que lo usa
export default CharacterDetail;
