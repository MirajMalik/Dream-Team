// import React from 'react';

import SelectedPlayerCard from "./SelectedPlayerCard";

const SelectedPlayers = ( {selectedPlayers, removePlayer} ) => {
    return (
        <div className="max-w-[1200px] mx-auto mt-4 flex flex-col gap-3">
            {selectedPlayers.length === 0 ? (
                <p className="text-gray-400">No players selected</p>
                ) : (
            selectedPlayers.map(player => (
                    <SelectedPlayerCard key={player.name} player={player} removePlayer = {removePlayer} />
                ))
                )}
        </div>
    );
};

export default SelectedPlayers;