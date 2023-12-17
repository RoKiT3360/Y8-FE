import React from "react";
import { render } from "react-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKnight, faFlag, faPlayCircle, faSoccerBall } from "@fortawesome/free-regular-svg-icons";
import { faFontAwesomeFlag } from "@fortawesome/free-brands-svg-icons";

export default function Body() {
    return(
        <div className="2xl:w-4/6 w-full h-[1000px] bg-gray-100">
            <div className="w-full h-1/5 flex flex-col">
                <div className="flex text-white gap-4 bg-white">
                    <div className="flex text-white gap-4 bg-white">
                    <button className="bg-green-500 py-2 px-4 rounded-xl text-white font-bold gap-2 flex items-center justify-around"><FontAwesomeIcon icon={faChessKnight} /> Strategy & RPG</button>
                    <button className="bg-fuchsia-500 py-2 px-4 rounded-xl text-white font-bold gap-2 flex items-center justify-around"><FontAwesomeIcon icon={faSoccerBall} />Sports</button>
                    <button className="bg-fuchsia-500 py-2 px-4 rounded-xl text-white font-bold gap-2 flex items-center justify-around"><FontAwesomeIcon icon={faFontAwesomeFlag} /> Driving</button>
                    <button className="bg-fuchsia-500 py-2 px-4 rounded-xl text-white font-bold gap-2 flex items-center justify-around"><FontAwesomeIcon icon={faPlayCircle} />Sports</button>
                    <button className="bg-green-500 py-2 px-4 rounded-xl text-white font-bold gap-2 flex items-center justify-around"><FontAwesomeIcon icon={faChessKnight} /> Strategy & RPG</button>
                    <button className="bg-fuchsia-500 py-2 px-4 rounded-xl text-white font-bold gap-2 flex items-center justify-around"><FontAwesomeIcon icon={faSoccerBall} />Sports</button>
                    <button className="bg-fuchsia-500 py-2 px-4 rounded-xl text-white font-bold gap-2 flex items-center justify-around"><FontAwesomeIcon icon={faFontAwesomeFlag} /> Driving</button>
                    <button className="bg-fuchsia-500 py-2 px-4 rounded-xl text-white font-bold gap-2 flex items-center justify-around"><FontAwesomeIcon icon={faPlayCircle} />Sports</button>
                    </div>
                </div>
                <div className="flex"></div>
            </div>
            <div className="w-full h-4/5 grid grid-row-1 2xl:grid-cols-6 2xl:grid-row-5 gap-3">
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