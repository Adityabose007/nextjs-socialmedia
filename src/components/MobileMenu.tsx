"use client"

import Link from 'next/link';
import React, { useState } from 'react'

export const MobileMenu = () => {
    const [isOpen,setIsOpen] = useState(false);
  return (
    <div className='md:hidden '>
        <div className='flex flex-col gap-[4.5px] cursor-pointer' onClick={()=>setIsOpen(prev=>!prev)}>
            {/* to create the hamburger menus */}
            <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "rotate-45 " : ""} origin-left ease duration-500`} />
            <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "opacity-0 " : ""} origin-left ease duration-500`} />
            <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "-rotate-45 " : ""} origin-left ease duration-500`} />
        </div>
        {/* if open create ours links */}
        {isOpen && (
            <div className=' absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10'>
                <Link href="/">Home</Link>
                <Link href="/">Friends</Link>
                <Link href="/">Grooups</Link>
                <Link href="/">Stories</Link>
                <Link href="/">Login</Link>
            </div>
        )}
    </div>
  )
}