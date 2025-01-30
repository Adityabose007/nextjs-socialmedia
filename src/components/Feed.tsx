import React from "react";
import { Post, PostProps } from "./Post";

export const Feed = () => {
  const posts: PostProps[] = [
    {
      user: "Ruben Almiron",
      profilePic: "https://images.pexels.com/photos/8136799/pexels-photo-8136799.jpeg",
      postImage: "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg",
      description: "A peaceful sunset by the ocean, where the waves whisper and the sky glows.",
      likes: 230,
      comments: 45,
      shares: 12,
      commentList: [
        { user: "James Brown", profilePic: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg", text: "This is stunning!", likes: 10 },
        { user: "Sophia Carter", profilePic: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg", text: "Wow, love the view!", likes: 8 },
      ],
    },
    {
      user: "Sophia Carter",
      profilePic: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      postImage: "https://images.pexels.com/photos/1231231/pexels-photo-1231231.jpeg",
      description: "Exploring the mountains! The fresh air and breathtaking views make it worth it.",
      likes: 340,
      comments: 78,
      shares: 23,
      commentList: [
        { user: "Antony", profilePic: "https://images.pexels.com/photos/28344982/pexels-photo-28344982/free-photo-of-grito-de-guerra.jpeg?auto=compress&cs=tinysrgb&w=600", text: "Awsome!", likes: 15 },
      ],
    },
    {
      user: "Gabriela Smith",
      profilePic: "https://images.pexels.com/photos/30386124/pexels-photo-30386124/free-photo-of-confident-african-male-in-red-shirt-portrait.jpeg?auto=compress&cs=tinysrgb&w=600",
      postImage: "https://images.pexels.com/photos/28525224/pexels-photo-28525224/free-photo-of-man-walking-on-suspension-bridge-in-scenic-nature.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Exploring the mountains! The fresh air and breathtaking views make it worth it.",
      likes: 340,
      comments: 78,
      shares: 23,
      commentList: [
        { user: "Rahul Gupta", profilePic: "https://images.pexels.com/photos/11920089/pexels-photo-11920089.jpeg", text: "Looks amazing!", likes: 15 },
      ],
    },
  ];

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col gap-12">
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
};
