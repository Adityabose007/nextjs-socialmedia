import Link from "next/link";
import React from "react";
import Image from "next/image";

export const Birthdays = () => {
  const birthdays = [
    {
      name: "John Doe",
      avatar: "https://images.pexels.com/photos/29768361/pexels-photo-29768361/free-photo-of-stylish-woman-in-urban-setting-with-motion-blur.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Jane Smith",  // Example - add more birthday entries
      avatar: "https://images.pexels.com/photos/2894400/pexels-photo-2894400.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    // ... more birthdays
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4 transition-all duration-300 ease-in-out"> {/* Added transition */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Birthdays</span>
      </div>

      {birthdays.map((birthday) => (
        <div key={birthday.name} className="flex items-center justify-between"> {/* Added key */}
          <div className="flex items-center gap-4">
            <Image
              src={birthday.avatar}
              alt={`${birthday.name}'s Avatar`}  
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover transition-transform duration-300 hover:scale-105"  
            />
            <span className="font-semibold">{birthday.name}</span>
          </div>
          <div className="flex"> {/* Removed unnecessary justify-end */}
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-2 py-1 rounded-md transition-colors duration-300"> {/* Added hover effect */}
              Celebrate
            </button>
          </div>
        </div>
      ))}

      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4 transition-all duration-300 hover:scale-102 hover:bg-slate-200"> {/* Added transition and hover effect */}
        <Image src="/gift.png" alt="Gift Icon" width={24} height={24} /> {/* Added alt text */}
        <Link href="/upcoming-birthdays" className="flex flex-col gap-1 text-xs"> {/* Improved link destination */}
          <span className="text-gray-700 font-semibold">
            Upcoming Birthdays
          </span>
          <span className="text-gray-500">
            See the other {birthdays.length + 15} have upcoming birthdays {/* Dynamic count */}
          </span>
        </Link>
      </div>
    </div>
  );
};