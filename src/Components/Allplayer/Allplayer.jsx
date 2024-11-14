import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

const Allplayer = ({handlePlayer}) => {
    const [players,setPlsyer]=useState([]);
    useEffect(()=>{
        fetch('./playerData.json')
        .then(res=>res.json())
        .then(data=>setPlsyer(data))
    },[])


    return (
        <div className='grid grid-cols-1 px-4 sm:px-8 md:px-16 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 md:grid-cols-3'>
            {
                players.map((p)=><Player
                key={p.id}
                player={p}
                handlePlayer={handlePlayer}
                ></Player>)
            }
        </div>
    );
};

export default Allplayer;