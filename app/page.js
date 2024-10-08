"use client";

import { usePathname } from 'next/navigation';
import frequency from "./assets/frequency.svg"
import videoBanner from "./assets/video-banner.png"



import Menu from '../components/Menu';
import TagLine from '../components/TagLine';
import VideoBanner from '@/components/VideoBanner';
import Navbar from '@/components/Navbar';

export default function Home() {
  const pathname = usePathname();

  const menus = [
    {
      id: 1,
      name: "Map",
      url: "/",
    },
    {
      id: 2,
      name: "Missions",
      url: "/missions",
    },
    {
      id: 3,
      name: "Characters",
      url: "/characters",
    },
    {
      id: 4,
      name: "Loadouts",
      url: "/loadouts",
    },
    {
      id: 5,
      name: "Events",
      url: "/events",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="bg-black h-screen relative">
        <div className="absolute left-5 top-40">
          {/* MENUS */}
          <Menu menus={menus} pathname={pathname} />
        </div>

        <div className="absolute left-5 bottom-10 z-10">
          {/* TAGLINE */}
          <TagLine icon={frequency} description={<><p>UTILIZING METAFI, UE5, AND WEB3 TECHNOLOGY TO</p><p>CREATE A SOCIAL AND IMMERSIVE GAMING METAVERSE.</p></>
          } />

        </div>


        <div className="absolute sm:right-5 z-0 opacity-30 sm:opacity-100 bottom-20 sm:m-0 m-4">
          <VideoBanner videoBanner={videoBanner} />
        </div>
      </div>
    </div>
  );
}
