import useNavbar from "@/hooks/navbar/useNavbar";
import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { IoMdClose } from "react-icons/io";

const SearchModal: React.FC<{ handleVisible: () => void }> = ({
  handleVisible,
}) => {
  const search = useAppSelector((search) => search.searchReducer.value);
  const { handleInput } = useNavbar();

  return (
    <div className="backdrop-blur-sm flex items-center justify-center fixed top-0 h-screen w-screen z-50">
      <div className="bg-green-500 p-4 rounded-xl">
        <div onClick={handleVisible} className="flex justify-end">
          <IoMdClose size={30} />
        </div>
        <input
          type="text"
          className="px-2 text-black py-1 mt-4"
          placeholder="Buscar personaje"
          value={search}
          onChange={handleInput}
        />
      </div>
    </div>
  );
};

export default SearchModal;
