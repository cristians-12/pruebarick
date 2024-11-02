// useFetch.ts
import { useState } from "react";
import {
  ResponseCharacter,
  ResponseEpisode,
  ResponseLocation,
} from "../../types/api/response";

const useFetch = <
  T extends ResponseCharacter | ResponseEpisode | ResponseLocation
>() => {
  const [dataFetch, setDataFetch] = useState<T | null>(null);

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      const data: T = await response.json();
      setDataFetch(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { fetchData, dataFetch };
};

export default useFetch;
