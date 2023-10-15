"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import NavLink from './NavLink'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'


const navLinks = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "/about"
    },
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='fixed mx-auto border border-none top-0 left-0 right-0 z-10 bg-[#ffffff] bg-opacity-95'>
        <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 pt-1'>
            {/*Logo*/}
            <Link href={'/'}>
                <Image 
                    className='md:w-12 md:h-12'
                    src="/images/logo.webp"
                    alt="logo"
                    width={32}
                    height={32}   
                />
            </Link>
            {/*Menu and close icon, open and close*/}
            <div className='mobile-menu block md:hidden'>
                {!navbarOpen ? (
                    <button
                    onClick={() => setNavbarOpen(true)}
                    className="flex items-center px-3 py-2 border rounded border-none text-[#222935] hover:text-[#346e94] hover:border-[#346e94]"
                    >
                        <Bars3Icon className="h-5 w-5" />
                    </button>
                ) : (
                    <button
                    onClick={() => setNavbarOpen(false)}
                    className="flex items-center px-3 py-2 border rounded border-none text-[#222935] hover:text-[#346e94] hover:border-[#346e94]"
                    >
                        <XMarkIcon className="h-5 w-5" />

                    </button>
                )}
            </div>
            {/*Pops menu pages*/}
            <div className='menu hidden md:block md:w-auto' id='navbar'>
                <ul className='flex p-2 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                    ))}     
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar;