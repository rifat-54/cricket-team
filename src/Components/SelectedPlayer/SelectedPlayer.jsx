import React from 'react';
import SelectPlayer from '../SelectPlayer/SelectPlayer';

const SelectedPlayer = ({chosePlyer,handleBtn,handleDelate}) => {
    // console.log(chosePlyer)
    return (
        <div className='space-y-4'>
            {
                chosePlyer.map(p=><SelectPlayer key={p.id} chosePlyers={p} handleDelate={handleDelate}></SelectPlayer>)
            }
            <button onClick={()=>handleBtn(true)} className='btn bg-[#C1DF1F] mx-4 md:mx-16'>Add more player</button>
        </div>
    );
};

export default SelectedPlayer;