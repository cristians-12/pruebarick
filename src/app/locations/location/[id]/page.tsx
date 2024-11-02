// pages/character/[id].tsx
import React, { useEffect } from "react";
import { Character } from "../../../../../types/api/characters";
import CharacterCard from "@/components/character/CharacterCard";
import { Location } from "../../../../../types/api/locations";
import { useParams } from "next/navigation";
import { API_LOCATIONS_URL } from "../../../../../constants";

const LocationDetail = () => {
  const { id } = useParams();
  const res = fetch(
    `${process.env.NEXT_PUBLIC_API_LOCATIONS_URL}/${id}`
  );

  const fetchLocation = async () => {
    const res = await fetch(
      `${API_LOCATIONS_URL}/${id}`
    );
  };

  useEffect(
    () => {
      fetchLocation()
    }, []
  )


  const location: Location = await res.json();

  const residentUrls = location.residents;
  const residentPromises = residentUrls.map((url) =>
    fetch(url).then((res) => res.json())
  );
  const residents: Character[] = await Promise.all(residentPromises);

  return (
    <div className="px-5">
      <h1 className="text-[30px] font-bold">{location.name}</h1>
      <p className="my-3">Personajes relacionados al lugar:</p>
      <div className="flex flex-wrap gap-10 justify-around">
        {residents.map((element) => (
          <CharacterCard character={element} key={element.id} />
        ))}
      </div>
    </div>
  );
};

export default LocationDetail;
