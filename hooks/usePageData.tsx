'use client'

import { useState } from "react";
import { Character } from "../types/api/characters";
import { Episode } from "../types/api/episodes";
import { Location } from "../types/api/locations";

const usePageData = () => {
    const [character, setCharacter] = useState<Character | null>(null);
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const [episode, setEpisode] = useState<Episode>();
    const [characters, setCharacters] = useState<Character[]>();
    const [location, setLocation] = useState<Location>();
    const [locations, setLocations] = useState<Location[]>();

    const changeCharacter = (character: Character) => {
        setCharacter(character)
    }

    const changeCharacters = (characters:Character[])=>{
        setCharacters(characters)
    }

    const changeLocation = (location:Location)=>{
        setLocation(location)
    }

    const changeLocations = (locations: Location[]) => {
        setLocations(locations)
    }

    const changeEpisode = (episode: Episode) => {
        setEpisode(episode)
    }

    const changeEpisodes = (episodes: Episode[]) => {
        setEpisodes(episodes)
    }

    return (
        {
            character,
            episodes,
            changeCharacter,
            changeEpisodes,
            changeEpisode,
            changeLocation,
            changeLocations,
            locations,
            location
        }
    )
}

export default usePageData