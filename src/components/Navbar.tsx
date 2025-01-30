import Link from 'next/link';
import React from 'react';
import { MobileMenu } from './MobileMenu';
import Image from 'next/image';
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className="h-20 bg-white shadow-md flex items-center justify-between px-4 md:px-8 lg:px-12 transition-all duration-300 ease-in-out"> {/* Added bg, shadow, padding, transition */}
      {/* LEFT */}
      <div className="flex items-center"> {/* Group logo and mobile menu */}
        <Link className="font-bold text-2xl md:text-3xl lg:text-4xl text-blue-600 transition-colors duration-300 hover:text-blue-700" href="/">BINGO</Link>
        <div className="md:hidden ml-4"> {/* Mobile menu button */}
          <MobileMenu />
        </div>
      </div>

      {/* CENTER (Hidden on smaller screens) */}
      <div className="hidden md:flex w-auto lg:w-[50%] justify-center"> {/* Adjusted width for better scaling */}
        <div className="flex gap-4 lg:gap-6 text-sm text-gray-600"> {/* Increased gap on larger screens */}
          <Link href="/" className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300"> {/* Added hover effect */}
            <Image src="/home.png" alt="Homepage" width={20} height={20} className="w-5 h-5" /> {/* Slightly larger icons */}
            <span>Homepage</span>
          </Link>
          <Link href="/friends" className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300">
            <Image src="/friends.png" alt="Friends" width={20} height={20} className="w-5 h-5" />
            <span>Friends</span>
          </Link>
          <Link href="/stories" className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300">
            <Image src="/stories.png" alt="Stories" width={20} height={20} className="w-5 h-5" />
            <span>Stories</span>
          </Link>
        </div>
      </div>


      {/* RIGHT */}
      <div className="flex items-center w-auto lg:w-[30%] justify-end gap-2 lg:gap-4"> {/* Adjusted width and gap */}
        <ClerkLoading>
          <div role="status" className="animate-spin"> {/* Simplified loading indicator */}
            <svg aria-hidden="true" className="w-6 h-6 text-gray-400 dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* ... (SVG code remains the same) */}
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </ClerkLoading>

        <ClerkLoaded>
          <SignedIn>
            <div className="flex gap-2"> {/* Grouped icons */}
              <div className="cursor-pointer hover:scale-110 transition-transform duration-300"> {/* Added hover effect */}
                <Image src="/people.png" alt="People" width={24} height={24} className="w-6 h-6" /> {/* Slightly larger icons */}
              </div>
              <div className="cursor-pointer hover:scale-110 transition-transform duration-300">
                <Image src="/messages.png" alt="Messages" width={24} height={24} className="w-6 h-6" />
              </div>
              <div className="cursor-pointer hover:scale-110 transition-transform duration-300">
                <Image src="/notifications.png" alt="Notifications" width={24} height={24} className="w-6 h-6" />
              </div>
            </div>
            <UserButton afterSignOutUrl="/" /> {/* Redirect to home after sign out */}
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm">
              <Link href="/sign-in" className="text-blue-600 hover:text-blue-700 transition-colors duration-300"> {/* Added hover effect */}
                Login/Register
              </Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </nav>
  );
};

export default Navbar;