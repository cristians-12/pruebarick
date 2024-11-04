import { Character } from "../../types/api/characters";

export const isFavorite = (favorites: Character[], character: Character) =>
  favorites.some((element) => element.id === character.id);
