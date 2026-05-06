// import React from 'react';
import { useState } from 'react';
import userImage from '../../assets/Group.png'
import flagImage from '../../assets/flag.png'
import { toast } from 'react-toastify';

const AvailablePlayerCart = ({ player, setAvailableBalance, availableBalance, setSelectedPlayers,selectedPlayers}) => {
    const {name, image, country, role, rating, battingStyle, bowlingStyle,priceInTaka} = player;
    const [isSelected, setIsSelected] = useState(false);
    // console.log(player);
return (
    <div className="card bg-white shadow-lg border border-gray-200 p-5 rounded-2xl hover:shadow-xl transition-all duration-300 hover:border-indigo-300">
        <figure>
            <img
                src={image}
                alt={name} 
                className='w-full h-[300px] object-cover'
            />
        </figure>

        <div className="mt-4">
            <div className='flex gap-2'>
                <img src={userImage} alt="user-image" />
                <h2 className="card-title font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{name}</h2>
            </div>

            <div className='flex items-center justify-between mt-4 border-b-2 border-gray-200 pb-2'>
                <div className='flex items-center gap-3 text-gray-700'>
                    <img className='w-[20px] h-[20px]' src={flagImage} alt="flag" />
                    <span className='font-medium'>{country}</span>
                </div>
                <button className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-lg text-sm font-semibold hover:shadow-lg transition-all'>{role}</button>
            </div>

            <div className='flex justify-between font-semibold mt-2 text-gray-700'>
                <span>Rating</span>
                <span className='text-indigo-600'>{rating}</span>
            </div>

            <div className='flex justify-between mt-4 text-sm text-gray-600'>
                <span className='bg-blue-50 px-3 py-1 rounded-lg'>{battingStyle}</span>
                <span className='bg-green-50 px-3 py-1 rounded-lg'>{bowlingStyle}</span>        
            </div>



            <div className="card-actions mt-6 flex justify-between items-center">
                <p className='font-bold text-lg text-indigo-600'>₹{priceInTaka.toLocaleString()}</p>
                <button 
                    onClick={() => {
                        if(availableBalance < priceInTaka) {
                            toast("Not Enough Coins");
                            return
                        }
                        if(selectedPlayers.length === 6) {
                            toast("6 players already selected!")
                            return
                        }
                        setIsSelected(true)
                        setAvailableBalance(availableBalance-priceInTaka)
                        setSelectedPlayers(prev => {
                            const exists = prev.find(pl => pl.name === player.name);
                            if (exists) return prev;
                            return [...prev,player];
                        })

                    toast("Player Purchased")
                        
                    }}
                    disabled = {isSelected}
                    className={`px-4 py-2 font-semibold rounded-lg transition-all duration-300 ${isSelected ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:-translate-y-1 cursor-pointer"}`}>{isSelected ? "Selected" : "Choose Player"}</button>
            </div>
        </div>
    </div>
    );
};

export default AvailablePlayerCart;