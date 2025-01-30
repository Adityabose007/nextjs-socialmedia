
import React from "react";
import { Feed } from "./Feed";
import { RightMenu } from "./RightMenu";
import { LeftMenu } from "./LeftMenu";
import Link from "next/link";
import Image from "next/image";

export const UserInformationCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <div className="">
        {/* button */}
        <div className="flex flex-col gap-4 text-gray-500">
            <div className="flex items-center gap-2">
                <span className="text-xl text-black">John Doe</span>
                <span className="text-sm">@john1234</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sint repellat nihil quam minus, atque cumque molestiae voluptas voluptatibus, vitae mollitia fuga quas enim id amet laboriosam velit distinctio.</p>
            <div className="flex items-center gap-2">
                <Image src="/map.png" alt="" width={16} height={16}/>
                <span>Living in <b>Denver</b></span>
            </div>
            <div className="flex items-center gap-2">
                <Image src="/school.png" alt="" width={16} height={16}/>
                <span>Went to <b>Hogwards High school</b></span>
            </div>
            <div className="flex items-center gap-2">
                <Image src="/work.png" alt="" width={16} height={16}/>
                <span>Work at <b>Google...</b></span>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex gap-1 items-center">
                    <Image src="/link.png" alt="" width={16} height={16}/>
                    <Link href="/" className="text-blue-500 font-medium ">ych.dev</Link>
                </div>
                <div className="flex gap-1 items-center">
                    <Image src="/date.png" alt="" width={16} height={16}/>
                    <span>Joined December 2024</span>
                </div>
            </div>
            <button className="bg-blue-500 text-white text-sm rounded-md p-2">Follow</button>
            <span className="text-red-400 self-end text-xs cursor-pointer">Block User</span>
        </div>
      </div>
    </div>
  );
};
