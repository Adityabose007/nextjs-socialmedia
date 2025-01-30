import Image from "next/image";
import React from "react";
import { Comments } from "./Comments";

export interface PostProps {
  user: string;
  profilePic: string;
  postImage: string;
  description: string;
  likes: number;
  comments: number;
  shares: number;
  commentList: { user: string; profilePic: string; text: string; likes: number }[];
}

export const Post: React.FC<PostProps> = ({
  user,
  profilePic,
  postImage,
  description,
  likes,
  comments,
  shares,
  commentList,
}) => {
  return (
    <div className="flex flex-col gap-6 bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-2xl mx-auto">
      {/* User Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src={profilePic} alt={user} width={40} height={40} className="w-10 h-10 rounded-full" />
          <span className="font-semibold text-gray-800">{user}</span>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Image src="/more.png" alt="More options" width={16} height={16} />
        </button>
      </div>

      {/* Post Description & Image */}
      <div className="flex flex-col gap-4">
        <p className="text-gray-700 text-sm">{description}</p>
        <div className="w-full h-64 relative rounded-lg overflow-hidden">
          <Image src={postImage} alt="Post" layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
      </div>

      {/* Interaction Section */}
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex gap-6">
          <button className="flex items-center gap-2 hover:text-blue-500">
            <Image src="/like.png" alt="Like" width={18} height={18} className="w-5 h-5" />
            <span>{likes} Likes</span>
          </button>
          <button className="flex items-center gap-2 hover:text-blue-500">
            <Image src="/comment.png" alt="Comment" width={18} height={18} className="w-5 h-5" />
            <span>{comments} Comments</span>
          </button>
        </div>
        <button className="flex items-center gap-2 hover:text-blue-500">
          <Image src="/share.png" alt="Share" width={18} height={18} className="w-5 h-5" />
          <span>{shares} Shares</span>
        </button>
      </div>

      {/* Comments Section */}
      <Comments comments={commentList} />
    </div>
  );
};
