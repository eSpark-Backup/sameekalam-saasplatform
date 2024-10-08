import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.svg"
import discord from "@/assets/discord.svg"
import menu from "@/assets/menu.svg"
import twitter from "@/assets/twitter.svg"
import Navitem from "./Navitem";
const Navbar = () => {
  return (
    <div className="my-7 mx-5 flex h-[69px]">
      <div style={{ border: "0.5px solid #FFFFFF33" }} className="w-[40%] md:w-[35%] 2xl:w-[40%] flex">
        <div className="lg:w-[20%] xl:w-[15%] md:w-[25%] 2xl:w-[10%] flex justify-center items-center">
          <Image src={logo} alt="Logo" />
        </div>
        <div className="lg:w-[80%] xl:w-[85%] md:w-[75%] 2xl:w-[90%] flex bg-[#FFFFFF1A]">
          <div className="w-[20%] bg-[#00FFE6]"></div>
        </div>

      </div>

      <div style={{ border: "1px solid #FFFFFF1A" }} className="w-[60%] md:w-[65%] 2xl:w-[60%] flex">
        <div className="w-[25%] lg:w-[30%]">
          <Navitem text={"ABOUT"} number={"001"} />
        </div>
        <div className="w-[0.2%] bg-[#FFFFFF1A]"></div>
        <div className="w-[34%] flex">
          <div className="w-[49%]">
            <Navitem image={discord.src} number={"002"} />
          </div>
          <div className="w-[0.2%] bg-[#FFFFFF1A]"></div>
          <div className="w-[49%]">
            <Navitem image={twitter.src} number={"003"} />
          </div>
        </div>
        <div className="w-[0.2%] bg-[#FFFFFF1A]"></div>
        <div className="w-[35%] lg:w-[30%]">
          <Navitem text={"LAUNC ultiverse"} number={"004"} />
        </div>
        <div className="w-[0.2%] bg-[#FFFFFF1A]"></div>
        <div className="w-[10%] flex justify-center items-center">
          <Image src={menu} alt="Menu" style={{ width: "90%", height: "8px" }} />
        </div>
      </div>

    </div>
  )
}

export default Navbar