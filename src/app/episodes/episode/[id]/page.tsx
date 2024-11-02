'use client'
import React, { useEffect } from "react";
import { Episode } from "../../../../../types/api/episodes";
import { Character } from "../../../../../types/api/characters";
import CharacterCard from "@/components/character/CharacterCard";
import { API_EPISODES_URL } from "../../../../../constants";
import { useParams } from "next/navigation";
import usePageData from "../../../../../hooks/usePageData";
import Loader from "@/components/Loader";

const EpisodeDetail = () => {
  const { id } = useParams();
  const { changeEpisode, changeCharacters, episode, characters } = usePageData();

  const fetchEpisode = async () => {
    const res = await fetch(
      `${API_EPISODES_URL}/${id}`
    );
    const episode: Episode = await res.json();
    changeEpisode(episode);

    const characterPromises = episode.characters.map((url) =>
      fetch(url).then((res) => res.json())
    );

    const characters: Character[] = await Promise.all(characterPromises)

    changeCharacters(characters)
  };

  useEffect(() => {
    fetchEpisode();
  }, []);



  return (
    <div className="px-5">
      {episode ? (
        <>
          <h1 className="text-[30px] font-bold">{episode.name}</h1>
          <h2 className="text-[20px]">
            Fecha de salida al aire: {episode.air_date}
          </h2>
          <h2>Episodio: {episode.episode}</h2>
          <p className="my-3">Personajes que salen en el episodio:</p>
          <div className="flex flex-wrap gap-10 justify-around">
            {characters && characters.map((element) => (
              <CharacterCard character={element} key={element.id} />
            ))}
          </div>
        </>
      )
      :
      (
        <Loader />
      )
    }
    </div>
  );
};

export default EpisodeDetail;
