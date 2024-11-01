import Link from 'next/link'
import React, { ReactNode } from 'react'
// import { CiHeart } from 'react-icons/ci'
import { IoSearchOutline } from 'react-icons/io5'

const NavBar: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <nav className='flex fixed z-50 top-0 w-screen justify-between items-center lg:px-10 bg-slate-600 py-3'>
                <Link href={'/'} className='text-[#7FB226] text-[1.5rem] font-bold cursor-pointer'>
                    RickMortyApp
                </Link>

                {/* <div className='flex gap-3 items-center cursor-pointer'>
                    <CiHeart size={25} />
                    Favorites
                </div> */}
                <Link className='flex gap-3 items-center cursor-pointer' href={'/episodes'}>Episodios</Link>
                <Link className='flex gap-3 items-center cursor-pointer' href={'/locations'}>Ubicaciones</Link>
                <div className='relative w-[30%]'>
                    <input type="text" placeholder='Ingrese un personaje' className='w-full px-2 py-2 rounded-xl bg-white' />
                    <IoSearchOutline className='absolute cursor-pointer right-3 top-2' color='black' size={25} />
                </div>
            </nav>
            {children}
        </>
    )
}

export default NavBar