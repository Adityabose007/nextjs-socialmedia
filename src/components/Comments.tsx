import Image from "next/image";
import React from "react";

// Define comment type
interface CommentProps {
  user: string;
  profilePic: string;
  text: string;
  likes: number;
}

interface CommentsProps {
  comments: CommentProps[];
}

export const Comments: React.FC<CommentsProps> = ({ comments }) => {
  return (
    <div className="space-y-6">
      {/* Comment Input */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/29209450/pexels-photo-29209450/free-photo-of-black-and-white-portrait-of-pensive-man-in-shadow.jpeg"
          alt="User Avatar"
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image src="/emoji.png" alt="Emoji" width={16} height={16} className="cursor-pointer" />
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment, index) => (
          <div key={index} className="flex gap-4 justify-between">
            {/* Avatar */}
            <Image
              src={comment.profilePic}
              alt={comment.user}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
            
            {/* Comment Content */}
            <div className="flex flex-col gap-2 flex-1">
              <span className="font-semibold">{comment.user}</span>
              <p>{comment.text}</p>
              <div className="flex items-center gap-8 text-xs text-gray-500">
                <div className="flex items-center gap-4">
                  <Image src="/like.png" alt="Like" width={12} height={12} className="cursor-pointer w-4 h-4" />
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-500">{comment.likes} Likes</span>
                </div>
                <div className="cursor-pointer hover:underline">Reply</div>
              </div>
            </div>

            {/* More Options */}
            <Image src="/more.png" alt="More Options" width={16} height={16} className="cursor-pointer w-4 h-4" />
          </div>
        ))}
      </div>
    </div>
  );
};
