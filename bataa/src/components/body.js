import React from "react";
import { render } from "react-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKnight, faFlag, faPlayCircle, faSoccerBall } from "@fortawesome/free-regular-svg-icons";
import { faFontAwesomeFlag } from "@fortawesome/free-brands-svg-icons";

export default function Body() {
    return(
        <div className="2xl:w-5/6 w-full h-[1000px] bg-gray-100">
            <div className="lg:w-full lg:h-1/5 flex flex-col w-0">
                <div className="flex-col lg:h-4/5 text-white gap-4 bg-white rounded hidden lg:flex">
                    <div className="flex lg:h-1/2 text-white gap-4 bg-white items-center justify-center text-sm">
                    <button className="bg-green-500 py-2 px-4 rounded-xl text-white font-bold flex items-center justify-between gap-3"><FontAwesomeIcon icon={faChessKnight} />Strategy & RPG</button>
                    <button className="bg-fuchsia-500 py-2 px-4 rounded-xl text-white font-bold gap-2 flex items-center justify-around"><FontAwesomeIcon icon={faSoccerBall} />Sports</button>
                    <button className="bg-fuchsia-500 py-2 px-4 rounded-xl text-white font-bold gap-2 flex items-center justify-around"><FontAwesomeIcon icon={faFontAwesomeFlag} />Driving</button>
                    <button className="bg-fuchsia-500 py-2 px-4 rounded-xl text-white font-bold gap-2 flex items-center justify-around"><FontAwesomeIcon icon={faPlayCircle} />Sports</button>
                    <button className="bg-green-500 py-2 px-4 rounded-xl text-white font-bold gap-2 flex items-center justify-around"><FontAwesomeIcon icon={faChessKnight} />Strategy & RPG</button>
                    <button className="bg-fuchsia-500 py-2 px-4 rounded-xl text-white font-bold gap-2 flex items-center justify-around"><FontAwesomeIcon icon={faSoccerBall} />Sports</button>
                    <button className="bg-fuchsia-500 py-2 px-4 rounded-xl text-white font-bold gap-2 flex items-center justify-around"><FontAwesomeIcon icon={faFontAwesomeFlag} />Driving</button>
                    <button className="bg-fuchsia-500 py-2 px-4 rounded-xl text-white font-bold gap-2 flex items-center justify-around"><FontAwesomeIcon icon={faPlayCircle} />Sports</button>
                    <button className="bg-gray-100 rounded py-2 px-4 text-black">All categories</button>
                    </div>
                    <div className="flex w-full">

                    </div>
                </div>
                <div className="flex"></div>
            </div>
            <div className="w-full h-4/5 grid grid-cols-2 2xl:grid-cols-6 2xl:grid-row-5 gap-3 p-3">
                <div className="flex bg-red-900 aspect-square rounded"></div>
                <div className="flex bg-red-900 aspect-square rounded"></div>
                <div className="flex bg-red-900 aspect-square rounded"></div>
                <div className="flex bg-red-900 aspect-square rounded"></div>
                <div className="flex bg-red-900 aspect-square rounded"></div>
                <div className="flex bg-red-900 aspect-square rounded"></div>
                <div className="flex bg-red-900 aspect-square rounded"></div>
                <div className="flex bg-red-900 aspect-square rounded"></div>
                <div className="flex bg-red-900 aspect-square rounded"></div>
                <div className="flex bg-red-900 aspect-square rounded"></div>
                <div className="flex bg-red-900 aspect-square rounded"></div>
                <div className="flex bg-red-900 aspect-square rounded"></div>
                <div className="flex bg-red-900 aspect-square rounded"></div>
                <div className="flex bg-red-900 aspect-square rounded"></div>
                <div className="flex bg-red-900 aspect-square rounded"></div>
                <div className="flex bg-red-900 aspect-square rounded"></div>
                <div className="flex bg-red-900 aspect-square rounded"></div>
                <div className="flex bg-red-900 aspect-square rounded"></div>
                <div className="flex bg-red-900 aspect-square rounded"></div>
                <div className="flex bg-red-900 aspect-square rounded"></div>
                <div className="flex bg-red-900 aspect-square rounded"></div>
                <div className="flex bg-red-900 aspect-square rounded"></div>
                <div className="flex bg-red-900 aspect-square rounded"></div>
                <div className="flex bg-red-900 aspect-square rounded"></div>

            </div>
        </div>
    )
}