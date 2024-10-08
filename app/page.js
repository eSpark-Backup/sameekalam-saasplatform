"use client";

import { usePathname } from 'next/navigation';
import frequency from "./assets/frequency.svg"
import videoBanner from "./assets/video-banner.png"
import Menu from '../components/Menu';
import TagLine from '../components/TagLine';
import VideoBanner from '@/components/VideoBanner';
import Navbar from '@/components/Navbar';
import Image from "next/image";
import { circle, click, spaceship, title1, title2 } from "@/assets";

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
    <>
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
      <div className="main-container">
        <div className="spaceship">
          <Image className="space" src={spaceship} width={1139} height={840} alt="space-ship" />
          <div style={{ borderRadius: "50%", background: "#00FFE6", filter: "blur(96px)", width: "250px", height: "250px" }} className="shadow-overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          </div>
          <div style={{ zIndex: "-1", borderRadius: "50%", background: "#00FFE6", filter: "blur(20px)", width: "150px", height: "150px" }} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          </div>
          <Image className="circle" src={circle} width={961} height={961} alt="circle" />
          <div className="heading">
            <Image src={title1} width={701} height={152} alt="title1" />
            <Image className="heading2" src={title2} width={705} height={140} alt="title2" />
            <p className="title1-no">001</p>
            <p className="title2-no">002</p>
          </div>
        </div>
        <Image className="click" src={click} width={105} height={105} alt="click" />
      </div >
    </>
  );
}
