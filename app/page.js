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
      <div className="relative">
        <Navbar />
        <div className="bg-black h-[calc(100vh-128px)] relative">
          <div className="absolute left-5 top-40">
            {/* MENUS */}
            <Menu menus={menus} pathname={pathname} />
          </div>

          <div className="absolute left-5 bottom-10 z-10">
            {/* TAGLINE */}
            <TagLine icon={frequency} description={<><p>UTILIZING METAFI, UE5, AND WEB3 TECHNOLOGY TO</p><p>CREATE A SOCIAL AND IMMERSIVE GAMING METAVERSE.</p></>
            } />

          </div>


          <div className="absolute sm:right-5 xl:z-10 z-0 opacity-30 sm:opacity-100 bottom-20 sm:m-0 m-4">
            <VideoBanner videoBanner={videoBanner} />
          </div>
        </div>
      </div>
      <div className="overflow-hidden w-screen h-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-[1139px] h-[840px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image className="h-[840px]" src={spaceship} width={1139} height={840} alt="space-ship" />
          <div className="bg-[url('../assets/spaceship.png')] filter drop-shadow-[0px_0px_0px_#00FFE6] w-[560px] h-[560px] bg-no-repeat bg-center rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
          <div className="bg-[#00FFE6] filter blur-[20px] w-[150px] h-[150px] z-[-1] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"> </div>
          <Image className="absolute top-[570px] z-[-5] h-[390px] left-1/2 transform -translate-x-1/2" src={circle} width={961} height={961} alt="circle" />
          <div className="absolute z-[-1] bottom-[160px] lg:left-[100px] xl:left-[-105px] md:left-[250px] left-[420px]">
            <Image src={title1} width={0} height={0} className="md:w-[701px] w-[300px]" alt="title1" />
            <Image
              className="absolute top-[180px] lg:left-[270px] md:w-[701px] w-[300px]"
              src={title2} width={0} height={0} alt="title2" />
            <p className="absolute top-0 left-[-50px] leading-[15px] text-[24px] font-medium text-[#FFFFFF4D] z-[11]">001</p>
            <p className="absolute top-[180px] left-[215px] leading-[15px] text-[24px] font-medium text-[#FFFFFF4D] z-[11]">002</p>
          </div>
        </div>
        <Image className="absolute top-[25%] left-[20%]" src={click} width={105} height={105} alt="click" />
      </div >
    </>
  );
}
