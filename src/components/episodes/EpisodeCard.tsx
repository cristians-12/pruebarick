"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Episode } from "@/types/api/episodes";
import { item } from "@/utils/motion";
import { addFavoriteEp, removeFavoriteEp } from "@/redux/features/favEpisodesSlice";



const EpisodeCard: React.FC<{ episode: Episode }> = ({ episode }) => {
  const favorites = useAppSelector(
    (favorite) => favorite.favoritesEpisodesReducer.value
  );
  const dispatch = useAppDispatch();

  const isFavorite = favorites.some((element) => element.id === episode.id);

  return (
    <div className="lg:w-[40%] w-[300px] h-[100px]">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className=" cursor-pointer flex flex-col bg-slate-600 lg:p-3 p-1 rounded-xl items-center justify-center gap-3"
        variants={item}
        key={episode.id}
      >
        <Link href={`/episode/${episode.id}`} className="font-bold w-full">
          {episode.name}
          <p>{episode.air_date}</p>
        </Link>
        <div className="flex w-full justify-between items-center">
          <span className="font-bold">{episode.episode}</span>
          {isFavorite ? (
            <FaHeart
              onClick={() => dispatch(removeFavoriteEp(episode))}
              fill="red"
              size={28}
            />
          ) : (
            <FaRegHeart
              onClick={() => dispatch(addFavoriteEp(episode))}
              size={30}
            />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default EpisodeCard;
