import { ResponseCharacter } from "../types/api/response";

const usePaginator = (fetchData: (url: string) => Promise<void>) => {
    const handlePrevious = (data: ResponseCharacter) => {
        if (data?.info.prev) {
            fetchData(data.info.prev);
        }
    };

    const handleNext = (data: ResponseCharacter) => {
        if (data?.info.next) {
            fetchData(data.info.next);
        }
    };

    return {
        handleNext,
        handlePrevious
    }
}

export default usePaginator;
