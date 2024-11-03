import React from "react";
import { motion } from "framer-motion";
import { item } from "../../../utils/motion";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Location } from "../../../types/api/locations";
import {
  addFavoriteLoc,
  removeFavoriteLoc,
} from "../../../redux/features/favLocationSlice";

const LocationCard: React.FC<{ location: Location }> = ({ location }) => {
  const favorites = useAppSelector(
    (favorite) => favorite.favoritesLocationReducer.value
  );
  const dispatch = useAppDispatch();

  const isFavorite = favorites.some((element) => element.id === location.id);

  return (
    <div className="lg:w-[40%] w-[70%] h-[100px]">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className=" cursor-pointer bg-slate-600 lg:p-3 p-1 rounded-xl flex flex-col items-center justify-center gap-3"
        variants={item}
        key={location.id}
      >
        <div className="flex justify-between w-full">
          <Link href={`/location/${location.id}`} className="font-bold w-full">
            {location.name}
          </Link>
          <p>Tipo: {location.type}</p>
        </div>
        <div className="flex w-full justify-between items-center">
          <span className="font-bold">Dimension: {location.dimension}</span>
          {isFavorite ? (
            <FaHeart
              fill="red"
              onClick={() => dispatch(removeFavoriteLoc(location))}
              size={28}
            />
          ) : (
            <FaRegHeart
              onClick={() => {
                dispatch(addFavoriteLoc(location));
              }}
              size={30}
            />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default LocationCard;
