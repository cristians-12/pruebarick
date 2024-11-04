"use client";
import React, { useEffect } from "react";
import CharacterCard from "@/components/character/CharacterCard";
import { useParams } from "next/navigation";
import Loader from "@/components/Loader";
import usePageData from "@/hooks/usePageData";
import { API_LOCATIONS_URL } from "@/constants";
import { Location } from "@/types/api/locations";
import { Character } from "@/types/api/characters";

const LocationDetail = () => {
  const { id } = useParams();
  const { changeLocation, location, changeCharacters, characters } =
    usePageData();

  const fetchLocation = async () => {
    const res = await fetch(`${API_LOCATIONS_URL}/${id}`);
    const location: Location = await res.json();
    changeLocation(location);

    const characterPromises = location.residents.map((url) =>
      fetch(url).then((res) => res.json())
    );
    const characters: Character[] = await Promise.all(characterPromises);
    changeCharacters(characters); // Actualizamos los personajes
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return location ? (
    <div className="px-5 h-auto">
      <h1 className="text-[30px] font-bold">{location.name}</h1>
      <p className="my-3">Personajes relacionados al lugar:</p>
      <div className="flex flex-wrap gap-10 justify-around">
        {characters &&
          characters.map((element) => (
            <CharacterCard character={element} key={element.id} />
          ))}
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default LocationDetail;
