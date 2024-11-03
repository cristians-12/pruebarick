"use client";
import React, { useEffect } from "react";
import useFetch from "../../../hooks/fetch/useFetch";
import { container } from "../../../utils/motion";
import { motion } from "framer-motion";
import CharacterCard from "./CharacterCard";
import { Character } from "../../../types/api/characters";
import Paginator from "../Paginator";
import usePaginator from "../../../hooks/usePaginator";
import { ResponseCharacter } from "../../../types/api/response";
import { API_CHARACTERS_URL } from "../../../constants";
import { useAppSelector } from "../../../redux/hooks";
import Loader from "../Loader";

const CharactersContainer = () => {
  const { fetchData, dataFetch } = useFetch<ResponseCharacter>();
  const { handleNext, handlePrevious } = usePaginator(fetchData);

  const page = useAppSelector((page) => page.pageReducer.value);
  const buscar = useAppSelector((buscar) => buscar.searchReducer.value);

  useEffect(() => {
    fetchData(`${API_CHARACTERS_URL}/?page=${page}&name=${buscar}`);
  }, [buscar]);

  return (
    <>
      {dataFetch ? (
        <>
          <motion.ul
            initial="hidden"
            animate="visible"
            className="flex gap-10 mt-3 justify-around flex-wrap"
            variants={container}
          >
            {dataFetch.results ? (
              dataFetch.results.map((character: Character) => (
                <CharacterCard character={character} key={character.id} />
              ))
            ) : (
              <p className="font-bold">No hay resultados</p>
            )}
          </motion.ul>
          {dataFetch.results && (
            <Paginator
              props={dataFetch.info}
              onPrevious={() => handlePrevious(dataFetch)}
              onNext={() => handleNext(dataFetch)}
            />
          )}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default CharactersContainer;
