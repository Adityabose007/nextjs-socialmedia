import Image from "next/image";
import Link from "next/link";
import React from "react";

export const FriendsRequest = () => {
  const requests = [
    {
      name: "Elizabeth",
      avatar:
        "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Margaret",
      avatar:
        "https://images.pexels.com/photos/3522693/pexels-photo-3522693.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      name: "Victoria",
      avatar:
        "https://images.pexels.com/photos/3616938/pexels-photo-3616938.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    // Add more requests here...
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4 transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link
          href="/requests"
          className="text-blue-500 text-xs hover:underline transition-colors duration-300"
        >
          See all
        </Link>
      </div>

      {requests.map((request) => (
        <div key={request.name} className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {" "}
            {/* Gap remains 4 */}
            <Image
              src={request.avatar}
              alt={`${request.name}'s Avatar`}
              width={40}
              height={40} /* Height remains 40 */
              className="w-10 h-10 rounded-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <span className="font-semibold">{request.name}</span>
          </div>
          <div className="flex gap-3">
            <button className="hover:scale-105 transition-transform duration-300 flex items-center p-1 rounded-md">
              {" "}
              {/* Added scale transform */}
              <Image
                src="/accept.png"
                alt="Accept"
                width={20}
                height={20}
                className="mr-1"
              />
            </button>
            <button className="hover:scale-105 transition-transform duration-300 flex items-center p-1 rounded-md">
              {" "}
              {/* Added scale transform */}
              <Image
                src="/reject.png"
                alt="Reject"
                width={20}
                height={20}
                className="mr-1"
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
