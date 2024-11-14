import React from 'react';
import banner from "../../../public/image/bg-shadow.png"
import banimg from "../../../public/image/banner-main.png"

const Banner = ({handleBalance}) => {
    return (
        <div className='px-4 sm:px-8 md:px-16'>

        <div className='bg-black rounded-md'>

        
        <div style={{backgroundImage:`url(${banner})`}} className=' text-white rounded-md text-center space-y-5 py-10'>
            <img className='mx-auto' src={banimg} alt="" />
            <h1 className='text-3xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-gray-300'>Beyond Boundaries Beyond Limits</p>
            <button onClick={()=>handleBalance(6000000)} className='btn font-bold bg-[#C1DF1F]'>Claim Free Credit</button>
        </div>
        </div>
        </div> 
    );
};

export default Banner;

