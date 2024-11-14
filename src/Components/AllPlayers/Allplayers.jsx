import React, { useState } from 'react';
import Allplayer from '../Allplayer/Allplayer';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const Allplayers = ({handlePlayer,chosePlyer,handleDelate}) => {
  
    const[btn,setBtn]=useState(true)

    const handleBtn=(value)=>{
      setBtn (value? true:false);
    }

    

    return (
        <div> 
            <div className='my-16 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:justify-between px-4 sm:px-8 md:px-16 '>
               <h2 className='text-3xl font-bold'>{btn?"Available Players":`Selected Player (${chosePlyer.length}/6)`}</h2>
                <div className='flex space-x-5 sm:space-x-2'>
                     <button onClick={()=>handleBtn(true)} className='btn bg-[#C1DF1F]'>Available</button>
                     <button onClick={()=>handleBtn(false)} className='btn bg-[#C1DF1F]'>Selected ( {chosePlyer.length} )</button>
                </div>
            </div>
            <div>
              {
                btn?<Allplayer handlePlayer={handlePlayer}></Allplayer>:<SelectedPlayer chosePlyer={chosePlyer} handleBtn={handleBtn} handleDelate={handleDelate}></SelectedPlayer>
              }
            </div>
        </div>
    );
};

export default Allplayers;