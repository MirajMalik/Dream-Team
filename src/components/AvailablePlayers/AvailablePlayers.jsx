// import React from 'react'
import { use } from "react";
import AvailablePlayerCart from "./AvailablePlayerCart";

const AvailablePlayers = ({playersPromise}) => {
    const playersData = use(playersPromise)
    // console.log(playersData);
    return (
        <div className="max-w-[1200px] mt-2 grid grid-cols-1 mx-auto md:grid-cols-3 h-screen gap-4">
            {
                playersData.map((player) => (
                    <AvailablePlayerCart player={player}/>
                ))
            }
        </div>
    )
};

export default AvailablePlayers;