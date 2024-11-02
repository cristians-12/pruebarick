'use client'
import React, { useEffect } from "react";
import { Episode } from "../../../../../types/api/episodes";
import { Character } from "../../../../../types/api/characters";
import CharacterCard from "@/components/character/CharacterCard";
import { API_EPISODES_URL } from "../../../../../constants";
import { useParams } from "next/navigation";

const CharacterDetail =  () => {
  const { id } = useParams();

  const fetchEpisode = async () => {
    const res = await fetch(
      `${API_EPISODES_URL}/${id}`
    );
    const character: Character = await res.json();
    setCharacter(character);

    const episodePromises = character.episode.map((url) =>
      fetch(url).then((res) => res.json())
    );
    const episodes: Episode[] = await Promise.all(episodePromises);
    setEpisodes(episodes);
  };

  useEffect(() => {

    fetchEpisode();

  }, []);

  const episode: Episode = await res.json();

  const charactersUrls = episode.characters;
  const charactersPromises = charactersUrls.map((url) =>
    fetch(url).then((res) => res.json())
  );
  const characters: Character[] = await Promise.all(charactersPromises);

  return (
    <div className="px-5">
      <h1 className="text-[30px] font-bold">{episode.name}</h1>
      <h2 className="text-[20px]">
        Fecha de salida al aire: {episode.air_date}
      </h2>
      <h2>Episodio: {episode.episode}</h2>
      <p className="my-3">Personajes que salen en el episodio:</p>
      <div className="flex flex-wrap gap-10 justify-around">
        {characters.map((element) => (
          <CharacterCard character={element} key={element.id} />
        ))}
      </div>
    </div>
  );
};

export default CharacterDetail;
