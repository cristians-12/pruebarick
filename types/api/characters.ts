interface Location {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterInfoResponse {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
}

export interface ResponseCharacter {
  results: Character[];
  info: CharacterInfoResponse;
}
