"use client";
import Link from "next/link";
import React, { ReactNode } from "react";

import { IoSearchOutline } from "react-icons/io5";

import SearchModal from "./SearchModal";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import useNavbar from "@/hooks/navbar/useNavbar";
import useSearchModal from "@/hooks/searchmodal/useSearchModal";
import { resetPage } from "@/redux/features/pageSlice";


const NavBar: React.FC<{ children: ReactNode }> = ({ children }) => {
  const busqueda = useAppSelector((busqueda) => busqueda.searchReducer.value);
  const { handleInput } = useNavbar();
  const dispatch = useAppDispatch();
  const { visible, handleVisible } = useSearchModal();

  return (
    <>
      <nav className="flex fixed z-50 top-0 w-screen justify-between items-center lg:px-10 bg-slate-900 py-3">
        <Link
          href={"/"}
          className="text-[#39f94f] text-[5vw] lg:text-[30px] font-bold cursor-pointer"
          onClick={() => dispatch(resetPage())}
        >
          RickMortyApp
        </Link>

        <figure onClick={handleVisible} className="lg:hidden">
          <IoSearchOutline size={25} />
        </figure>

        {/* <div className='flex gap-3 items-center cursor-pointer'>
                    <CiHeart size={25} />
                    Favorites
                </div> */}
        <Link
          className="flex hover:text-green-400 gap-3 items-center cursor-pointer"
          href={"/episodes"}
          onClick={() => dispatch(resetPage())}
        >
          Episodios
        </Link>
        <Link
          className="flex hover:text-green-400 gap-3 items-center cursor-pointer"
          href={"/locations"}
          onClick={() => dispatch(resetPage())}
        >
          Ubicaciones
        </Link>
        <div className="relative hidden lg:block w-[30%]">
          <input
            type="text"
            placeholder="Ingrese un personaje"
            className="w-full px-2 py-2 rounded-xl bg-white text-black"
            value={busqueda}
            onChange={handleInput}
          />
          <IoSearchOutline
            className="absolute cursor-pointer right-3 top-2"
            color="black"
            size={25}
          />
        </div>
      </nav>
      {children}
      {visible && <SearchModal handleVisible={handleVisible} />}
    </>
  );
};

export default NavBar;
