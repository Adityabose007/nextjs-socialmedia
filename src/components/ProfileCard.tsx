import Image from 'next/image';
import React from 'react';

export const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4 transition-all duration-300 ease-in-out"> 
      {/* Cover Image */}
      <div className="relative h-32 w-full overflow-hidden rounded-md"> 
        <Image
          src="https://images.pexels.com/photos/29407941/pexels-photo-29407941/free-photo-of-hand-holding-camera-with-scenic-city-backdrop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Cover Photo"
          fill
          className="object-cover transition-transform duration-300 hover:scale-105" 
          sizes="100vw" // Improve image responsiveness
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div> 
      </div>


      {/* Profile Picture and Details */}
      <div className="flex flex-col items-center">
        <div className="relative -mt-16 w-24 h-24 rounded-full overflow-hidden ring-2 ring-white z-10 transition-transform duration-300 hover:scale-105 cursor-pointer"> 
          <Image
            src="https://images.pexels.com/photos/29209450/pexels-photo-29209450/free-photo-of-black-and-white-portrait-of-pensive-man-in-shadow.jpeg"
            alt="Profile Picture"
            fill
            className="object-cover"
          />
        </div>
        <span className="mt-2 font-semibold text-base">{/* Added margin top */}Logan Paul</span>
        <div className="flex items-center gap-2 mt-1"> {/* Added margin top, reduced gap */}
          <div className="flex -space-x-2"> {/* Added negative margin for overlapping avatars */}
            {[1, 2, 3].map((index) => ( // Map for consistent avatars
              <Image
                key={index}
                src="https://images.pexels.com/photos/29407941/pexels-photo-29407941/free-photo-of-hand-holding-camera-with-scenic-city-backdrop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt={`Friend ${index}`}
                width={20}
                height={20}
                className="rounded-full object-cover w-5 h-5 ring-1 ring-white transition-transform duration-300 hover:scale-105" // Added ring, hover effect
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">{/* Reduced margin top */}69 Followers</span>
        </div>
        <button className="mt-2 bg-blue-500 text-white text-xs p-2 rounded-md hover:bg-blue-600 transition-colors duration-300"> {/* Added margin top, hover effect */}
          My Profile
        </button>
      </div>
    </div>
  );
};