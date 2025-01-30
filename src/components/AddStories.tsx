import Image from "next/image";
import React from "react";

export const AddStories = () => {
  const stories = [
    { name: "James", img: "https://images.pexels.com/photos/6981880/pexels-photo-6981880.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" },
    { name: "William", img: "https://images.pexels.com/photos/21369556/pexels-photo-21369556/free-photo-of-man-holding-hand-on-his-beard.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" },
    { name: "Henry", img: "https://images.pexels.com/photos/30042493/pexels-photo-30042493/free-photo-of-dramatic-portrait-of-man-in-vintage-style.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" },
    { name: "Ricky", img: "https://images.pexels.com/photos/13573970/pexels-photo-13573970.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" },
    { name: "Charles", img: "https://images.pexels.com/photos/10500054/pexels-photo-10500054.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" },
    { name: "Edward", img: "https://images.pexels.com/photos/11160446/pexels-photo-11160446.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" },
    { name: "Mason", img: "https://images.pexels.com/photos/6409119/pexels-photo-6409119.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" },
    { name: "Jackson", img: "https://images.pexels.com/photos/13278045/pexels-photo-13278045.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-x-auto scrollbar-hide">
      <div className="flex gap-6 w-max px-2">
        {stories.map((story, index) => (
          <div key={index} className="flex flex-col items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
            <div className="p-1 bg-gradient-to-tr from-purple-500 to-orange-400 rounded-full">
              <Image
                src={story.img}
                alt={story.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full object-cover border-2 border-white"
              />
            </div>
            <span className="font-medium text-gray-700">{story.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
