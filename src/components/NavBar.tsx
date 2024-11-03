"use client";
import Link from "next/link";
import React, { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IoSearchOutline } from "react-icons/io5";
import useNavbar from "../../hooks/navbar/useNavbar";
import { resetPage } from "../../redux/features/pageSlice";
// import { CiHeart } from 'react-icons/ci'
// import { IoSearchOutline } from "react-icons/io5";

const NavBar: React.FC<{ children: ReactNode }> = ({ children }) => {
  const busqueda = useAppSelector((busqueda) => busqueda.searchReducer.value);
  const { handleInput } = useNavbar();
  const dispatch = useAppDispatch();

  return (
    <>
      <nav className="flex fixed z-50 top-0 w-screen justify-between items-center lg:px-10 bg-slate-600 py-3">
        <Link
          href={"/"}
          className="text-[#39f94f] text-[1.5rem] font-bold cursor-pointer"
          onClick={() => dispatch(resetPage())}
        >
          RickMortyApp
        </Link>

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
    </>
  );
};

export default NavBar;
