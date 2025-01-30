"use client";

import Image from "next/image";
import React, { useState } from "react";

export const Addpost = () => {
  const [postText, setPostText] = useState("");
  const [isFocused, setIsFocused] = useState(false); // Track focus state

  const handlePost = () => {
    if (postText.trim() !== "") {
      // Handle post submission here (e.g., API call)
      console.log("Posting:", postText);
      setPostText(""); // Clear the textarea after posting
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex gap-4 text-sm transition-all duration-300 ease-in-out"> {/* Added transition */}
      <Image
        src="https://images.pexels.com/photos/29209450/pexels-photo-29209450/free-photo-of-black-and-white-portrait-of-pensive-man-in-shadow.jpeg" // Replace with your user avatar path
        width={48}
        height={48}
        alt="User Avatar"
        className="w-12 h-12 object-cover rounded-full"
      />

      <div className="flex-1">
        <div className={`flex gap-4 transition-all duration-300 ease-in-out ${isFocused ? 'ring-2 ring-blue-500' : ''}`}> {/* Added ring on focus */}
          <textarea
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            placeholder="What's on your mind?"
            className="bg-slate-100 flex-1 p-2 rounded-lg focus:outline-none resize-none min-h-[40px] transition-all duration-300 ease-in-out" // Removed default focus styles, added resize-none
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <button className="self-end" onClick={() => { /* Implement emoji picker logic here */ alert("Emoji picker clicked")}}>
            <Image src="/emoji.png" width={20} height={20} alt="Emoji" className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
          </button>
        </div>

        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          {[
            { src: "/addimage.png", label: "Photo" },
            { src: "/addVideo.png", label: "Video" },
            { src: "/addevent.png", label: "Event" },
            { src: "/poll.png", label: "Poll" },
          ].map((option, index) => (
            <div key={index} className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors">
              <Image src={option.src} width={20} height={20} alt={option.label} />
              {option.label}
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-end">
          <button
            onClick={handlePost}
            disabled={postText.trim() === ""} // Disable if textarea is empty or contains only whitespace
            className={`px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 ease-in-out ${
              postText.trim() ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};