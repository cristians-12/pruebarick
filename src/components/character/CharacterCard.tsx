"use client";
import React from "react";
import { Character } from "../../../types/api/characters";
import { motion } from "framer-motion";
// import Image from "next/image";
import { item } from "../../../utils/motion";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { FaCircle, FaHeart, FaRegHeart } from "react-icons/fa";
import {
  addFavorite,
  removeFavorite,
} from "../../../redux/features/favoritesSlice";

const CharacterCard: React.FC<{ character: Character }> = ({ character }) => {
  const favorites = useAppSelector(
    (favorite) => favorite.favoritesReducer.value
  );
  const dispatch = useAppDispatch();

  const isFavorite = favorites.some((element) => element.id === character.id);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className=" cursor-pointer flex flex-col lg:w-[20%] w-[44%] items-center justify-center gap-3 bg-slate-50 text-black rounded-2xl py-2 lg:overflow-hidden"
      variants={item}
      key={character.id}
    >
      <Link
        href={`/character/${character.id}`}
        className="w-full flex flex-col px-3 gap-1"
      >
        <img
          src={character.image}
          width={300}
          className="w-full"
          height={100}
          alt={character.name}
        />
        <span className="font-bold w-full flex justify-between items-center">
          {character.name} {character.status === "Dead" ?
            (
              <>

                <FaCircle fill="red" size={10} />
              </>
            ) : character.status === "Alive" ? (
              <>

                <FaCircle fill="lightgreen" size={10} />
              </>
            ) : (
              <FaCircle fill='gray' size={10} />
            )}</span>

        <span className="font-bold w-full">{character.species}</span>
      </Link>
      <div className="flex w-full justify-between px-3 items-center">
        <span className="font-bold">{character.location.name}</span>
        {isFavorite ? (
          <FaHeart
            fill="red"
            onClick={() => dispatch(removeFavorite(character))}
            size={28}
          />
        ) : (
          <FaRegHeart
            onClick={() => dispatch(addFavorite(character))}
            size={30}
          />
        )}
      </div>
    </motion.div>
  );
};

export default CharacterCard;
