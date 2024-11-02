"use client";
import { db } from "@/firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useAppSelector } from "../../redux/hooks";

const useFirebase = () => {
  const favorites = useAppSelector(
    (favorite) => favorite.favoritesReducer.value
  );
  const favoritesEpisodes = useAppSelector(
    (favorite) => favorite.favoritesEpisodesReducer.value
  );
  const favoritesLocations = useAppSelector(
    (favorite) => favorite.favoritesLocationReducer.value
  );

  const addDocument = async () => {
    await addDoc(collection(db, "likes"), {
      favoriteCharacters: favorites,
      favoriteEpisodes: favoritesEpisodes,
      favoriteLocations: favoritesLocations,
    });
  };

  return {
    addDocument,
  };
};

export default useFirebase;
