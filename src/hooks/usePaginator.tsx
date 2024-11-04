import {
  ResponseCharacter,
  ResponseEpisode,
  ResponseLocation,
} from "../types/api/response";

const usePaginator = (fetchData: (url: string) => Promise<void>) => {
  const handlePrevious = (
    data: ResponseCharacter | ResponseEpisode | ResponseLocation
  ) => {
    if (data?.info.prev) {
      fetchData(data.info.prev);
    }
  };

  const handleNext = (
    data: ResponseCharacter | ResponseEpisode | ResponseLocation
  ) => {
    if (data?.info.next) {
      fetchData(data.info.next);
    }
  };

  return {
    handleNext,
    handlePrevious,
  };
};

export default usePaginator;
