"use client";
import React, { useEffect } from "react";
// import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import EpisodeCard from "@/components/episodes/EpisodeCard";
import { useParams } from "next/navigation";
import Loader from "@/components/Loader";
import usePageData from "@/hooks/usePageData";
import { API_CHARACTERS_URL } from "@/constants";
import { Character } from "@/types/api/characters";
import { Episode } from "@/types/api/episodes";

export default function CharacterDetail() {
  const { character, episodes, changeCharacter, changeEpisodes } =
    usePageData();

  const { id } = useParams();

  const fetchCharacter = async () => {
    const res = await fetch(`${API_CHARACTERS_URL}/${id}`);
    const character: Character = await res.json();
    changeCharacter(character);

    const episodePromises = character.episode.map((url) =>
      fetch(url).then((res) => res.json())
    );
    const episodes: Episode[] = await Promise.all(episodePromises);
    changeEpisodes(episodes);
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  if (!character) {
    return <Loader />;
  }

  return (
    <div>
      <div className="px-5 lg:flex gap-10">
        <div className="lg:w-[30%] bg-slate-500 p-2 rounded-xl">
          <figure className="w-[100%]">
            <img
              className="w-full"
              src={character.image}
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

          <p>
            <span className="font-bold">Género:</span> {character.gender}
          </p>
        </div>
        <div className="lg:w-[70%]">
          <p className="lg:text-[30px]">
            <span className="font-bold">Ubicado en:</span>{" "}
            {character.location.name}
          </p>
          <p className="lg:text-[30px]">
            <span className="font-bold">Viene de:</span> {character.origin.name}
          </p>
          <p className="my-3 font-bold">
            Episodios en los que aparece el personaje:
          </p>
          <div className="lg:flex flex-wrap gap-x-[3%] h-auto justify-around gap-y-5 w-full lg:h-[70vh] lg:p-20 overflow-x-hidden lg:overflow-y-scroll">
            {episodes.map((episode: Episode) => (
              <EpisodeCard episode={episode} key={episode.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
