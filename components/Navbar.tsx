import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div>
      <div className="p-6 md:p-10 flex items-center justify-between z-50">
        <div>
          <Link href="/">
            <Image
              priority
              src="logo/logo.svg"  
              alt="logo"
              width={100}
              height={100}
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </Link>
        </div>
        
        <div className="cursor-pointer hidden md:flex space-x-10 items-center text-slate-300 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50to bg-white text-white bg-opacity-50">
          <Link href="/" className="hover:text-gray-400">temp</Link>
          <Link href="/" className="hover:text-gray-400">temp</Link>
          <Link href="/" className="hover:text-gray-400">temp</Link>
          <Link href="/contact" className="hover:text-gray-400">temp</Link>
        </div>

        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="inline-flex h-12 animate-shimmer items-center justify-center 
            rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
            bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
             focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
              focus:ring-offset-slate-50"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};