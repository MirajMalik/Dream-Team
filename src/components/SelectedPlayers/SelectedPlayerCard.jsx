// import React from 'react';

const SelectedPlayerCard = ({player}) => {
    return (
    <div className="flex items-center justify-between bg-slate-800 text-white rounded-xl border border-slate-700 px-4 py-3 hover:bg-slate-700 transition-colors">

        <div className="flex items-center gap-4">
            <img
            src={player.image}
            alt={player.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500"
            />
            <div>
                <h3 className="text-sm font-semibold">{player.name}</h3>
                <p className="text-xs text-slate-400">{player.role}</p>
            </div>
        </div>

      <button
        // onClick={() => onDelete(player)}
        className="text-red-500 hover:text-red-400 text-sm font-medium transition-colors"
      >
        ✕
      </button>
    </div>
  );
};

export default SelectedPlayerCard;