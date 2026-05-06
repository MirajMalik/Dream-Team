// import React from 'react';

const SelectedPlayerCard = ({player, removePlayer }) => {
    const handleRemove = () => {
        removePlayer(player)
    }
    return (
    <div className="flex items-center justify-between bg-gradient-to-r from-indigo-50 to-purple-50 text-gray-800 rounded-xl border-2 border-indigo-200 px-5 py-4 hover:shadow-lg transition-all duration-300 hover:border-indigo-400">

        <div className="flex items-center gap-4">
            <img
            src={player.image}
            alt={player.name}
            className="w-14 h-14 rounded-full object-cover border-3 border-indigo-500 shadow-md"
            />
            <div>
                <h3 className="text-sm font-bold text-indigo-900">{player.name}</h3>
                <p className="text-xs text-indigo-600 font-medium">{player.role}</p>
            </div>
        </div>

      <button
        onClick={() => handleRemove()}
        className="bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all duration-300 hover:shadow-lg"
      >
        ✕
      </button>
    </div>
  );
};

export default SelectedPlayerCard;