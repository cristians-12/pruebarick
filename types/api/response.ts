import { Character } from "./characters";
import { Episode } from "./episodes";

export interface ResponseCharacter {
  results: Character[];
  info: InfoResponse;
}

export interface ResponseEpisode {
    results: Episode[];
    info: InfoResponse;
  }

export interface InfoResponse {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
}
