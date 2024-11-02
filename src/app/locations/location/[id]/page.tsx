// pages/character/[id].tsx
import React from "react";
import { Character } from "../../../../../types/api/characters";
import CharacterCard from "@/components/character/CharacterCard";
import { Location } from "../../../../../types/api/locations";

const LocationDetail = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_LOCATIONS_URL}/${params.id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch location details");
  }

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
