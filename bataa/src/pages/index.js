import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Body from "@/components/body";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full bg-gray-100 items-center flex flex-col gap-3">
      <Header></Header>
      <Body></Body>
      <>
        <div className="w-full h-96 bg-black text-white text-4xl flex justify-center">
          <p className="w-1/4">
            Gambling.com Group is a leading provider of digital marketing
            services for the online gambling industry
          </p>
          <img src="https://objects.kaxmedia.com/auto/o/112194/01ff4527f9.jpeg"></img>
        </div>
        <div className="w-full h-96 bg-white text-black">
          <p>
            We are advancing the online sports betting and casino gaming
            communities through best-in-class content, expert analysis, data
            comparison and industry advocacy.Gambling.com Group frequently lends
            its experience and insight to media covering the rapidly expanding
            global online gambling industry, and lawmakers and gaming regulators
            crafting the next generation of laws and regulations for our dynamic
            industry.
          </p>
        </div>
      </>
    </div>
  );
}
