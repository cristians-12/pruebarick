"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Paginator from "../Paginator";
import LocationCard from "./LocationCard";
import { ResponseLocation } from "@/types/api/response";
import usePaginator from "@/hooks/usePaginator";
import useFetch from "@/hooks/fetch/useFetch";
import { API_LOCATIONS_URL } from "@/constants";
import { container } from "@/utils/motion";
import { Location } from "@/types/api/locations";

const LocationContainer = () => {
  const { fetchData, dataFetch } = useFetch<ResponseLocation>();
  const { handleNext, handlePrevious } = usePaginator(fetchData);

  useEffect(() => {
    fetchData(`${API_LOCATIONS_URL}`);
  }, []);

  return (
    <>
      <p className="text-[30px] px-5 my-5">Ubicaciones:</p>
      {dataFetch && (
        <>
          <motion.ul
            initial="hidden"
            animate="visible"
            className="flex gap-10 justify-around flex-wrap"
            variants={container}
          >
            {dataFetch.results.map((location: Location) => (
              <LocationCard location={location} key={location.id} />
            ))}
          </motion.ul>
          <Paginator
            props={dataFetch.info}
            onPrevious={() => handlePrevious(dataFetch)}
            onNext={() => handleNext(dataFetch)}
          />
        </>
      )}
    </>
  );
};

export default LocationContainer;
