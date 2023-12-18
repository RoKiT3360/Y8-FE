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
    </div>
  );
}
