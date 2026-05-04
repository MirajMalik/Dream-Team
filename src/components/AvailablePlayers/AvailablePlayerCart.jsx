// import React from 'react';
import { useState } from 'react';
import userImage from '../../assets/Group.png'
import flagImage from '../../assets/flag.png'

const AvailablePlayerCart = ({ player, setAvailableBalance, availableBalance, setSelectedPlayers }) => {
    const {name, image, country, role, rating, battingStyle, bowlingStyle,priceInTaka} = player;
    const [isSelected, setIsSelected] = useState(false);
    // console.log(player);
return (
    <div className="card bg-base-100 shadow-sm border-2 p-4">
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
                <h2 className="card-title">{name}</h2>
            </div>

            <div className='flex items-center justify-between mt-4 border-b-2 border-gray-400 pb-2'>
                <div className='flex items-center gap-3'>
                    <img className='w-[20px] h-[20px]' src={flagImage} alt="flag" />
                    <span>{country}</span>
                </div>
                <button className='btn p-2'>{role}</button>
            </div>

            <div className='flex justify-between font-bold mt-2'>
                <span>Rating</span>
                <span>{rating}</span>
            </div>

            <div className='flex justify-between mt-4'>
                <span>{battingStyle}</span>
                <span>{bowlingStyle}</span>        
            </div>



            <div className="card-actions mt-4 flex justify-between items-center">
                <p className='font-bold'>Price: ${priceInTaka}</p>
                <button 
                    onClick={() => {
                        if(availableBalance < priceInTaka) {
                            alert("Not Enough Coins")
                            return
                        }
                        setIsSelected(true)
                        setAvailableBalance(availableBalance-priceInTaka)
                        setSelectedPlayers(prev => {
                            const exists = prev.find(pl => pl.name === player.name);
                            if (exists) return prev;
                            return [...prev,player];
                        })
                        
                    }}
                    disabled = {isSelected}
                    className="btn p-2 cursor-pointer hover:text-gray-400">{isSelected ? "Selected" : "Choose Player"}</button>
            </div>
        </div>
    </div>
    );
};

export default AvailablePlayerCart;