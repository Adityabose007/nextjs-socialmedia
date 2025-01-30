import React from 'react';
import { ProfileCard } from './ProfileCard';
import Link from 'next/link';
import Image from 'next/image';
import { Ads } from './Ads';

export const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  const menuItems = [
    { href: "/", src: "/posts.png", label: "My Posts" },
    { href: "/", src: "/activity.png", label: "Activity" },
    { href: "/", src: "/market.png", label: "Marketplace" },
    { href: "/", src: "/events.png", label: "Events" },
    { href: "/", src: "/albums.png", label: "Albums" },
    { href: "/", src: "/videos.png", label: "Videos" },
    { href: "/", src: "/news.png", label: "News" },
    { href: "/", src: "/courses.png", label: "Courses" },
    { href: "/", src: "/lists.png", label: "Lists" },
    { href: "/", src: "/settings.png", label: "Settings" },
  ];

  return (
    <aside className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}

      <nav className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        {menuItems.map((item) => (
          <React.Fragment key={item.label}>
            <Link href={item.href} className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200">
              <Image src={item.src} alt={item.label} width={20} height={20} />
              <span>{item.label}</span>
            </Link>
            {menuItems.indexOf(item) < menuItems.length - 1 && <hr className="border-t border-gray-50 w-36 self-center" />}
          </React.Fragment>
        ))}
      </nav>

      <Ads size="sm" />
    </aside>
  );
};