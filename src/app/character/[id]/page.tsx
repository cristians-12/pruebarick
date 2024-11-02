import React from "react";
import { Character } from "../../../../types/api/characters";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";
import { Episode } from "../../../../types/api/episodes";
import EpisodeCard from "@/components/episodes/EpisodeCard";

// interface CharacterPageProps {
//   params: {
//     id: string;
//   };
// }

export default async function CharacterDetail({ params }: Promise<{ id: string }>) {
  // Fetch character details
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_CHARACTERS_URL}/${params.id}`,
    {
      cache: "no-store",
    }
  );

  const character: Character = await res.json();

  const episodePromises = character.episode.map((url) =>
    fetch(url).then((res) => res.json())
  );
  const episodes: Episode[] = await Promise.all(episodePromises);

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
}
