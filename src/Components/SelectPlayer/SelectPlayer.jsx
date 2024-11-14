import React from 'react';
import { MdDelete } from "react-icons/md";
const SelectPlayer = ({chosePlyers,handleDelate}) => {
    // console.log(chosePlyers)
    const {id,image,hand,playerName}=chosePlyers;
    
    return (
        <div className='flex justify-between border border-gray-500 rounded-md items-center py-3 px-4 md:px-5 mx-4 md:mx-16'>
             <div className='flex items-center gap-4'>
                <div>
                    <img className='w-[50px] h-[50px] rounded-md' src={image} alt="" />
                </div>
                <div>
                    <h3 className='text-2xl font-bold'>{playerName}</h3>
                    <p className='text-gray-700'>{hand}</p>
                </div>
             </div>
             {/* icon */}
             <div>
                <button onClick={()=>handleDelate(chosePlyers)} className='text-2xl text-red-600'><MdDelete /></button>
               
             </div>
        </div>
    );
};

export default SelectPlayer;