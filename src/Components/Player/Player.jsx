import React from "react";
import { IoFlagSharp } from "react-icons/io5";

const Player = ({player,handlePlayer}) => {
    const{id,image,playerName,countryName,playerType,hand,
    bowlingType,price}=player;
  return (
    <div>
    <div className="card space-y-5 bg-base-100 py-8 px-4 sm:px-5  shadow-xl">
        <img className="w-[350px] h-[250px] rounded-md" src={image} alt="" />
        <div className="flex gap-3 items-center">
        <img width="50" height="50" src="https://img.icons8.com/sf-black-filled/50/administrator-male.png" alt="administrator-male"/>
            <h2 className="text-2xl font-bold">{playerName}</h2>
        </div>
        <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <IoFlagSharp />
                <p>{countryName}</p>
            </div>
            <div className="bg-[#1313130D] px-4 py-2 rounded-md">
                <h4>{playerType}</h4>
            </div>
        </div>
        <hr />
        <h2>Rating</h2>
        <div className="flex items-center justify-between">
            <p>{hand}</p>
            <p>{bowlingType}</p>
        </div>
        <div className="flex items-center justify-between">
            <p>${price}</p>
            <button onClick={()=>handlePlayer(player)} className="btn">Choose Player</button>
        </div>
        
    </div>
    </div>
  );
};

export default Player;
