// import React from 'react';

import SelectedPlayerCard from "./SelectedPlayerCard";

const SelectedPlayers = ( {selectedPlayers} ) => {
    return (
        <div className="max-w-[1200px] mx-auto mt-4 flex flex-col gap-3">
            {selectedPlayers.length === 0 ? (
                <p className="text-gray-400">No players selected</p>
                ) : (
            selectedPlayers.map(player => (
                    <SelectedPlayerCard key={player.name} player={player} />
                ))
                )}
        </div>
    );
};

export default SelectedPlayers;