// import React from 'react'
import { use } from "react";
import AvailablePlayerCart from "./AvailablePlayerCart";

const AvailablePlayers = ({playersPromise, setAvailableBalance, availableBalance, setSelectedPlayers, selectedPlayers, searchPlayer = ''}) => {
    const playersData = use(playersPromise);
    
    const filteredPlayers = playersData.filter((player) => 
        player.name.toLowerCase().includes(searchPlayer.toLowerCase()) ||
        (player.country && player.country.toLowerCase().includes(searchPlayer.toLowerCase()))
    );

    return (
        <div className="max-w-[1200px] mt-2 grid grid-cols-1 mx-auto md:grid-cols-3 gap-4 px-4">
            {filteredPlayers.length > 0 ? (
                filteredPlayers.map((player) => (
                    <AvailablePlayerCart key={player.name} player={player} availableBalance = {availableBalance} setAvailableBalance={setAvailableBalance} setSelectedPlayers = {setSelectedPlayers} selectedPlayers={selectedPlayers}/>
                ))
            ) : (
                <div className="col-span-full flex items-center justify-center py-12">
                    <p className="text-xl font-semibold text-gray-400">🔍 No players found matching "<span className="text-indigo-600">{searchPlayer}</span>"</p>
                </div>
            )}
        </div>
    )
};

export default AvailablePlayers;