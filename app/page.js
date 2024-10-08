import Image from "next/image";
import { circle, click, spaceship, title1, title2 } from "@/assets";

export default function Home() {
  return (
    <div className="main-container">
      <div className="spaceship">
        <Image className="space" src={spaceship} width={1139} height={840} alt="space-ship" />
        <div className="shadow-overlay"></div>
        <div className="shadow-overlay-circle"></div>
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
  );
}
