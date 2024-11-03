"use client";

import { newSearch } from "../../redux/features/searchSlice";
import { useAppDispatch } from "../../redux/hooks";

const useNavbar = () => {
  const dispatch = useAppDispatch();
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(newSearch(e.target.value));
  };

  return {
    handleInput
  };
};

export default useNavbar;
