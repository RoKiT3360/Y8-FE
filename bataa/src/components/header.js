import { render } from "react-dom";
import { faHome, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChessKnight,
  faFlag,
  faPlayCircle,
  faSoccerBall,
} from "@fortawesome/free-regular-svg-icons";
import { faFontAwesomeFlag } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <div className="w-full h-[52px] bg-white flex sticky top-0 justify-center">
      <div className="w-[360px] h-full flex items-center gap-5 justify-between">
        <div className="w-[20px] h-[17px] flex">
          <div className="w-[20px] h-[17px] flex flex-col gap-1">
            <div className="w-full h-[2px] bg-gray-400 rounded"></div>
            <div className="w-full h-[2px] bg-gray-400 rounded"></div>
            <div className="w-full h-[2px] bg-gray-400 rounded"></div>
          </div>
          <div className="flex w-full bg-white">
            <div className="w-[40%] flex flex-col">
              <div className="w-16 h-11 hidden lg:flex flex flex-col rounded-lg bg-gray-200 text-black justify-center items-center text-sm">
                <a
                  href="./"
                  className="sm:w-full w-0 h-0 sm:h-1/2 flex justify-center items-center text-red-500 bg-gray-800 p-1 rounded-md"
                >
                  Games
                </a>
                <a
                  href="./"
                  className="sm:w-full w-0 h-0 sm:h-1/2 flex justify-center items-center opacity-70 hover:opacity-100"
                >
                  Videos
                </a>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
        <div className="w-[94px] h-[52px] flex">
          <a href="./" className="w-full h-full">
            <img
              className="w-full h-full"
              src="https://img.y8.com/system/logos/180/original/Y8_NewLogoAnim_ChristmasDay_126x70_English.gif?1545034905"
            ></img>
          </a>
        </div>
        <div className="w-16 h-11 hidden lg:flex flex flex-col rounded-lg bg-gray-200 text-black justify-center items-center text-sm">
          <a
            href="./"
            className="sm:w-full w-0 h-0 sm:h-1/2 flex justify-center items-center text-red-500 bg-gray-800 p-1 rounded-md"
          >
            Games
          </a>
          <a
            href="./"
            className="sm:w-full w-0 h-0 sm:h-1/2 flex justify-center items-center opacity-70 hover:opacity-100"
          >
            Videos
          </a>
        </div>
        <div className="h-11 text-sm md:text-md lg:text-lg w-[400px] relative hidden md:flex">
          <input
            placeholder="Search our 90,000 Games"
            className="bg-gray-100 h-full p-4 w-full rounded flex hidden md:flex"
          ></input>
          <div className="absolute right-2 top-2 cursor-pointer">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
        <div className="w-[63px] h-[28px] flex gap-2">
          <img src="https://img.y8.com/assets/svg/search-9887eb433e2eff9a1fd0dda066ed7abf52897beecba0dce9ef152c2770dc9082.svg"></img>
          <img
            className="h-full w-[26px]"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          ></img>
        </div>
      </div>
    </div>
  );
}
