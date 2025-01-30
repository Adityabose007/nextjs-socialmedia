import Image from "next/image";
import React from "react";

export const Ads = ({ size }: { size: "sm" | "md" | "lg" }) => {
  const adContent = {
    sm: {
      image: "https://images.pexels.com/photos/29694769/pexels-photo-29694769/free-photo-of-cute-christmas-gnomes-by-the-fireplace.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      companyImage: "https://images.pexels.com/photos/716658/pexels-photo-716658.jpeg?auto=compress&cs=tinysrgb&w=600",
      companyName: "BigSanta coming",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    md: {
      image: "https://images.pexels.com/photos/29694769/pexels-photo-29694769/free-photo-of-cute-christmas-gnomes-by-the-fireplace.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      companyImage: "https://images.pexels.com/photos/716658/pexels-photo-716658.jpeg?auto=compress&cs=tinysrgb&w=600",
      companyName: "BigSanta coming",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    lg: {
      image: "https://images.pexels.com/photos/29694769/pexels-photo-29694769/free-photo-of-cute-christmas-gnomes-by-the-fireplace.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      companyImage: "https://images.pexels.com/photos/716658/pexels-photo-716658.jpeg?auto=compress&cs=tinysrgb&w=600",
      companyName: "BigSanta coming",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
  };

  const { image, companyImage, companyName, description } = adContent[size];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm transition-all duration-300 ease-in-out"> {/* Added transition */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image src="/more.png" alt="More Ads" width={16} height={16} className="cursor-pointer hover:scale-110 transition-transform" /> {/* Added hover effect */}
      </div>

      <div className="mt-4 flex flex-col gap-4"> {/* Consistent gap for all sizes */}
        <div className="relative w-full aspect-video overflow-hidden rounded-lg"> {/* Use aspect-ratio and overflow hidden */}
          <Image
            src={image}
            alt="Advertisement"
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"  
            sizes="100vw" 
          />
        </div>

        <div className="flex items-center gap-4">
          <Image src={companyImage} alt={companyName} width={24} height={24} className="rounded-full w-6 h-6 object-cover" />
          <span className="text-blue-500 font-medium hover:underline transition-colors duration-300 cursor-pointer">{companyName}</span> {/* Added hover effect and cursor */}
        </div>

        <p className="text-sm text-gray-600 line-clamp-3"> {/* Added line-clamping */}
          {description}
        </p>

        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg hover:bg-gray-300 transition-colors duration-300"> {/* Added hover effect */}
          Learn More
        </button>
      </div>
    </div>
  );
};