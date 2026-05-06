// import React from 'react';

import SelectedPlayerCard from "./SelectedPlayerCard";

const SelectedPlayers = ( {selectedPlayers, removePlayer} ) => {
    return (
        <div className="max-w-[1200px] mx-auto mt-6 flex flex-col gap-3 px-4">
            {selectedPlayers.length === 0 ? (
                <p className="text-center text-gray-400 text-lg py-8">No players selected yet</p>
                ) : (
            selectedPlayers.map(player => (
                    <SelectedPlayerCard key={player.name} player={player} removePlayer = {removePlayer} />
                ))
                )}
        </div>
    );
};

export default SelectedPlayers;