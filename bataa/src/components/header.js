import { render } from "react-dom";
import { faHome, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKnight, faFlag, faPlayCircle, faSoccerBall } from "@fortawesome/free-regular-svg-icons";
import { faFontAwesomeFlag } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
    return(
        <div className="w-full h-[80px] bg-white flex sticky justify-center">
            <div className="w-4/6 h-full flex items-center gap-5">
                <div className="w-126 h-70 flex">
                    <a href="./"><img src="https://img.y8.com/system/logos/180/original/Y8_NewLogoAnim_ChristmasDay_126x70_English.gif?1545034905"></img></a>
                </div>
                <div className="sm:w-16 sm:h-11 w-0 h-0 flex flex-col rounded-lg bg-gray-200 text-black justify-center items-center text-sm">
                    <a href="./" className="sm:w-full w-0 h-0 sm:h-1/2 flex justify-center items-center text-red-500 bg-gray-800 p-1 rounded-md">Games</a>
                    <a href="./" className="sm:w-full w-0 h-0 sm:h-1/2 flex justify-center items-center opacity-70 hover:opacity-100">Videos</a> 
                </div>
                <div className="h-11 text-sm md:text-md lg:text-lg w-[300px]">
                    <input placeholder="Search our 90,000 Games" className="bg-gray-100 h-full w-full rounded flex">
                        
                    </input>
                </div>
                <div></div>
            </div>
        </div>
    );
}